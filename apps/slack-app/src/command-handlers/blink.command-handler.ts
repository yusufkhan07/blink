import AWS from 'aws-sdk';
import { Logger, WebClient } from '@slack/web-api';
import { MessageExpirationHandlerStateMachineInput } from '../state-machines/types';
import { formatTimeRemaining } from '../utils/formatTimeRemaining';
import {
  AllMiddlewareArgs,
  SlackCommandMiddlewareArgs,
  SlashCommand,
  StringIndexed,
} from '@slack/bolt';
import { constants } from '../constants';
const stepfunctions = new AWS.StepFunctions();

const scheduleMessageExpiry = async (
  messageExpirationHandlerStateMachineInput: MessageExpirationHandlerStateMachineInput,
  logger: Logger
) => {
  logger.info("Scheduling message for expiry: ", messageExpirationHandlerStateMachineInput);

  const messageExpirationHandlerStateMachineArn =
    process.env.MessageExpirationHandlerStateMachineArn;

  await stepfunctions
    .startExecution({
      stateMachineArn: messageExpirationHandlerStateMachineArn,
      input: JSON.stringify(messageExpirationHandlerStateMachineInput),
    })
    .promise();
};

const postNewMessage = async (
  client: WebClient,
  command: SlashCommand,
  expirationTimeInSecs: number
): Promise<any> => {
  // Calculate expiration timestamp
  const expirationTimestampInSecs =
    Math.floor(Date.now() / 1000) + expirationTimeInSecs;

  return await client.chat.postMessage({
    attachments: [],
    channel: command.channel_id,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:lock: _<@${command.user_id}> sent this disappearing message using blink_`,
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
        elements: [
          {
            type: 'mrkdwn',
            text: `:hourglass: Expires <!date^${expirationTimestampInSecs}^{date} at {time}|${new Date(
              expirationTimestampInSecs * 1000
            ).toLocaleString()}> | :alarm_clock: *Time remaining*: ${formatTimeRemaining(
              expirationTimeInSecs
            )}`,
          },
        ],
      },
    ],
    text: `:lock: <@${command.user_id}> sent this disappearing message using blink`,
  });
};

export const blinkCommandHandler = async ({
  ack,
  command,
  respond,
  logger,
  client,
}: SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>) => {
  logger.info("blink command handler started execution");

  await ack();

  // TODO: This should be fetched from settings instead of hard coding it.
  const expirationTimeInSecs = constants.defaultMessageExpiryInSecs;

  try {
    logger.info("Creating new message");

    const postedMessage = await postNewMessage(
      client,
      command,
      expirationTimeInSecs
    );

    logger.info("Created new message");

    await scheduleMessageExpiry({
      expireAt: new Date(
        (Math.floor(Date.now() / 1000) + expirationTimeInSecs) * 1000
      ).toISOString(),
      team_id: command.team_id,
      ts: postedMessage.ts,
      channel_id: command.channel_id,
      user_id: command.user_id,
    }, logger);
  } catch (err) {
    logger.error(err);
    
    // TODO: send this error before trying to post the message.
    // Figure out a way to check permissions of the given channel
    if (err.data?.error === 'channel_not_found') {
      respond({
        response_type: 'ephemeral',
        text: 'Please invite Blink to this private/shared channel before using it.',
      });
    }

    console.log(err);
  }
};
