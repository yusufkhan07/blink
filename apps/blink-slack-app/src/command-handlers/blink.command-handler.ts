import AWS from 'aws-sdk';
import { Logger, WebClient } from '@slack/web-api';
import { MessageExpirationHandlerStateMachineInput } from '../state-machines/types';
import {
  AllMiddlewareArgs,
  SlackCommandMiddlewareArgs,
  SlashCommand,
  StringIndexed,
} from '@slack/bolt';
import { randomUUID } from 'crypto';
import { constants } from '../constants';
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';
import { parseExpirationToSeconds } from '../utils/parseExpirationToSeconds';
import { UserMessageRepository } from '../repositories/user-message.repository';
import { SlackUiBuilder } from '../slack-ui-builder';
import { MetricsRepository } from '../repositories/metrics.repository';

// TODO: Update FAQs to include info about Blink in DMs

export class BlinkCommandHandler {
  private readonly stepfunctions = new AWS.StepFunctions();

  constructor(
    private readonly messageExpirationHandlerStateMachineArn: string,
    private readonly userMessageExpirationSettingsRepository: UserMessageExpirationSettingsRepository,
    private readonly userMessageRepository: UserMessageRepository,
    private readonly metricsRepository: MetricsRepository,
    private readonly slackUiBuilder: SlackUiBuilder
  ) {}

  private async scheduleMessageExpiry(
    messageExpirationHandlerStateMachineInput: MessageExpirationHandlerStateMachineInput,
    logger: Logger
  ) {
    logger.info(
      'Scheduling message for expiry: ',
      messageExpirationHandlerStateMachineInput
    );

    await this.stepfunctions
      .startExecution({
        stateMachineArn: this.messageExpirationHandlerStateMachineArn,
        input: JSON.stringify(messageExpirationHandlerStateMachineInput),
      })
      .promise();
  }

  private async postNewMessageInChannel(
    client: WebClient,
    command: SlashCommand,
    expirationTimeInSecs: number
  ): Promise<{ ts?: string }> {
    // TODO: Cache this user info to avoid multiple API calls
    const slackUser = await client.users.info({ user: command.user_id });

    const blocks = this.slackUiBuilder.buildChannelMessage(
      command.user_id,
      command.text,
      expirationTimeInSecs
    );

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
      text: `:dash: <@${command.user_id}> sent this disappearing message using blink`,
      blocks,
    });
  }

  private async postNewMessageInDirectMessage({
    command,
    respond,
    expirationTimeInSecs,
  }: Pick<
    SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>,
    'command' | 'respond'
  > & { expirationTimeInSecs: number }) {
    const messageId = new Date().getTime().toString() + '-' + randomUUID();

    await this.userMessageRepository.save({
      id: messageId,
      text: command.text,
      created_at: new Date().toISOString(),
      expire_at:
        new Date(Date.now() + expirationTimeInSecs * 1000).getTime() / 1000,
    });

    const blocks = this.slackUiBuilder.buildPrivateMessage(
      command.user_id,
      messageId,
      expirationTimeInSecs
    );

    await respond({
      response_type: 'in_channel',
      text: 'Blink is not available in direct messages. Please use it in a public/private channel.',
      blocks,
    });
  }

  public handle = async ({
    ack,
    command,
    respond,
    logger,
    client,
  }: SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>) => {
    logger.info('blink command handler started execution');

    await ack();

    const userExpirationTimeSettingValue =
      await this.userMessageExpirationSettingsRepository.getExpirationTime(
        command.user_id
      );
    const expirationTimeInSecs = userExpirationTimeSettingValue
      ? parseExpirationToSeconds(userExpirationTimeSettingValue)
      : constants.defaultMessageExpiryInSecs;

    if (command.channel_name === 'directmessage') {
      await this.postNewMessageInDirectMessage({
        command,
        respond,
        expirationTimeInSecs,
      });

      await this.metricsRepository.incrementDirectMessageCount({
        id: command.team_id,
        name: command.team_domain,
      });

      return;
    }

    try {
      logger.info('Creating new message');

      const postedMessage = await this.postNewMessageInChannel(
        client,
        command,
        expirationTimeInSecs
      );

      logger.info('Created new message');

      await this.scheduleMessageExpiry(
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
          await this.postNewMessageInDirectMessage({
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

    await this.metricsRepository.incrementChannelMessageCount({
      id: command.team_id,
      name: command.team_domain,
    });
  };
}
