import AWS from 'aws-sdk';
import { ContextBlockElement, Logger, WebClient } from '@slack/web-api';
import { MessageExpirationHandlerStateMachineInput } from '../state-machines/types';
import {
  AllMiddlewareArgs,
  SlackCommandMiddlewareArgs,
  SlashCommand,
  StringIndexed,
} from '@slack/bolt';
import { randomUUID } from 'crypto';
import { constants } from '../constants';
import { slack_actions } from '../slack-actions';
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';
import { parseExpirationToSeconds } from '../utils/parseExpirationToSeconds';
import { UserMessageRepository } from '../repositories/user-message.repository';

const stepfunctions = new AWS.StepFunctions();
const userMessageExpirationSettingsRepository =
  new UserMessageExpirationSettingsRepository();
const userMessageRepository = new UserMessageRepository();

const buildExpiresAt = (expirationTimeInSecs: number): ContextBlockElement => {
  const expirationTimestampInSecs =
    Math.floor(Date.now() / 1000) + expirationTimeInSecs;

  return {
    type: 'mrkdwn',
    text: `:hourglass: Expires <!date^${expirationTimestampInSecs}^{date} at {time}|${new Date(
      expirationTimestampInSecs * 1000
    ).toLocaleString()}>`,
  };
};

const scheduleMessageExpiry = async (
  messageExpirationHandlerStateMachineInput: MessageExpirationHandlerStateMachineInput,
  logger: Logger
) => {
  logger.info(
    'Scheduling message for expiry: ',
    messageExpirationHandlerStateMachineInput
  );

  const messageExpirationHandlerStateMachineArn =
    process.env.MessageExpirationHandlerStateMachineArn;

  await stepfunctions
    .startExecution({
      stateMachineArn: messageExpirationHandlerStateMachineArn,
      input: JSON.stringify(messageExpirationHandlerStateMachineInput),
    })
    .promise();
};

// Post a new message in a public/private/shared channel or multi person chat
const postNewMessageInChannel = async (
  client: WebClient,
  command: SlashCommand,
  expirationTimeInSecs: number
): Promise<any> => {
  // TODO: Cache this user info to avoid multiple API calls
  const slackUser = await client.users.info({ user: command.user_id });

  // Note: We can use respond() function to reply in DMs but there's no way to update the message later.
  // So we use postMessage() to send the message and then update it later.
  return await client.chat.postMessage({
    attachments: [],
    channel: command.channel_id,
    username:
      slackUser.user.profile.display_name ||
      slackUser.user.profile.real_name ||
      command.user_name,
    icon_url: slackUser.user.profile.image_48,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:dash: _<@${command.user_id}> sent this disappearing message using blink_`,
        },
        accessory: {
          type: 'overflow',
          action_id: slack_actions.message_menu,
          options: [
            {
              text: {
                type: 'plain_text',
                emoji: true,
                text: ':wastebasket:  Delete message',
              },
              value: 'value-0',
            },
          ],
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${command.text}`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [buildExpiresAt(expirationTimeInSecs)],
      },
    ],
    text: `:dash: <@${command.user_id}> sent this disappearing message using blink`,
  });
};

const postNewMessageInDirectMessage = async ({
  command,
  respond,
  expirationTimeInSecs,
}: Pick<
  SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>,
  'command' | 'respond'
> & { expirationTimeInSecs: number }) => {
  const messageId = new Date().getTime().toString() + '-' + randomUUID();

  await userMessageRepository.save({
    id: messageId,
    text: command.text,
    created_at: new Date().toISOString(),
    expire_at: new Date(Date.now() + expirationTimeInSecs * 1000).toISOString(),
  });

  await respond({
    response_type: 'in_channel',
    text: 'Blink is not available in direct messages. Please use it in a public/private channel.',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:dash: <@${command.user_id}> sent this disappearing message using blink`,
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Message',
              emoji: true,
            },
            action_id: slack_actions.view_dm_message,
            value: messageId,
            style: 'primary',
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [buildExpiresAt(expirationTimeInSecs)],
      },
    ],
  });
};

export const blinkCommandHandler = async ({
  ack,
  command,
  respond,
  logger,
  client,
}: SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>) => {
  logger.info('blink command handler started execution');

  await ack();

  const userExpirationTimeSettingValue =
    await userMessageExpirationSettingsRepository.getExpirationTime(
      command.user_id
    );
  const expirationTimeInSecs = userExpirationTimeSettingValue
    ? parseExpirationToSeconds(userExpirationTimeSettingValue)
    : constants.defaultMessageExpiryInSecs;

  if (command.channel_name === 'directmessage') {
    await postNewMessageInDirectMessage({
      command,
      respond,
      expirationTimeInSecs,
    });

    return;
  }

  try {
    logger.info('Creating new message');

    const postedMessage = await postNewMessageInChannel(
      client,
      command,
      expirationTimeInSecs
    );

    logger.info('Created new message');

    await scheduleMessageExpiry(
      {
        expire_at: new Date(
          (Math.floor(Date.now() / 1000) + expirationTimeInSecs) * 1000
        ).toISOString(),
        team_id: command.team_id,
        ts: postedMessage.ts,
        channel_id: command.channel_id,
        user_id: command.user_id,
      },
      logger
    );
  } catch (err) {
    logger.error(err);

    // Using if-else instead of posting a message in try block could improve performance
    if (err.data?.error === 'channel_not_found') {
      if (command.channel_name.startsWith('mpdm-')) {
        await postNewMessageInDirectMessage({
          command,
          respond,
          expirationTimeInSecs,
        });

        return;
      } else {
        // Notes: Slack bot can't join a private channel automatically. It has to be invited by a user.
        await respond({
          response_type: 'ephemeral',
          text: 'Please invite Blink using `/invite @Blink` in this private/shared channel before using it.',
        });

        return;
      }
    }
  }
};
