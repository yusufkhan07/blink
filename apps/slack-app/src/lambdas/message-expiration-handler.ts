import { App } from '@slack/bolt';
import { MessageExpirationHandlerStateMachineInput } from '../state-machines/types';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

module.exports.handler = async (
  event: MessageExpirationHandlerStateMachineInput
) => {
  await app.client.chat.update({
    ts: event.ts,
    channel: event.channel_id,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:lock: _<@${event.user_id}> sent this disappearing message using blink_`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `_This message expired at <!date^${Math.floor(
            Date.now() / 1000
          )}^{date} at {time}|${new Date(
            Math.floor(Date.now() / 1000) * 1000
          ).toLocaleString()}>_`,
        },
      },
    ],
    text: `:lock: _<@${event.user_id}> sent this disappearing message using blink_`,
  });

  return {
    statusCode: 204,
  };
};
