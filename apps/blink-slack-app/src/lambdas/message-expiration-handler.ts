import { App } from '@slack/bolt';
import { MessageExpirationHandlerStateMachineInput } from '../state-machines/types';
import { SlackOAuthTokensRepository } from '../repositories/slack-oAuth-token.repository';
import { Config } from '../config';

const config = new Config();

const signingSecret = config.slackSigningSecret;
const slackOAuthTokensRepository = new SlackOAuthTokensRepository(
  config.tableNames.slackOAuthTokensTable
);

const hideMessage = async (
  event: MessageExpirationHandlerStateMachineInput
) => {
  const botToken = (
    await slackOAuthTokensRepository.fetchInstallation(event.team_id)
  ).bot?.token;

  const app = new App({
    signingSecret,
    token: botToken,
  });

  try {
    await app.client.chat.update({
      ts: event.ts,
      channel: event.channel_id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `:dash: _<@${event.user_id}> sent this disappearing message using blink_`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `_This message expired on <!date^${Math.floor(
              Date.now() / 1000
            )}^{date} at {time}|${new Date(
              Math.floor(Date.now() / 1000) * 1000
            ).toLocaleString()}>_`,
          },
        },
      ],
      text: `:dash: _<@${event.user_id}> sent this disappearing message using blink_`,
    });
  } catch (error) {
    if (error.data?.error === 'message_not_found') {
      // Ignore if the message is already deleted or if the channel is not found
      return;
    }

    throw error;
  }
};

module.exports.handler = async (
  event: MessageExpirationHandlerStateMachineInput
) => {
  await hideMessage(event);

  return {
    statusCode: 204,
  };
};
