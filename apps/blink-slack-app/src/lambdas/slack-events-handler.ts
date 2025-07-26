import { App, StringIndexed } from '@slack/bolt';
import serverless from 'serverless-http';
import { blinkCommandHandler } from '../command-handlers/blink.command-handler';
import { expressReceiver } from '../express-receiver';
import { blinkmodaltestCommandHandler } from '../command-handlers/blinkmodaltest.command-handler';
import { slack_actions } from '../slack-actions';
import { messageMenuActionHandler } from '../action-handlers/message-menu.action-handler';
import { slack_events } from '../slack-events';
import { appHomeOpenedEventHandler } from '../event-handlers/app-home-opened.event-handler';
import { userMessageExpirationSelectedActionHandler } from '../action-handlers/user-message-expiration-selected.action-handler';

// TODO: setup prettier
// TODO: setup vs code auto formatting on save

// Feature 1:
// User types /blink message
// It's displayed ONCE for EACH User in Chat

const app = new App({
  receiver: expressReceiver,
});

export const configureCommands = (app: App<StringIndexed>) => {
  app.command('/blink', blinkCommandHandler);

  app.command('/blinkmodaltest', blinkmodaltestCommandHandler);

  app.action(slack_actions.message_menu, messageMenuActionHandler);

  app.action(
    'view_dm_message',
    async ({ ack, body, client, logger, action }) => {
      // console.log('🚀 ~ configureCommands ~ body.channel.id:', body.channel.id);
      // console.log('helolo', body['container'].message_ts);
      // console.log('Posting new message in channel 2:', body.channel.id);

      // console.log('🚀 ~ configureCommands ~ body:', body);
      // console.log('🚀 ~ configureCommands ~ action:', action);
      // logger.info('blink_dm_learn_more action triggered');

      await ack();
      await client.views.open({
        trigger_id: body['trigger_id'],
        view: {
          type: 'modal',
          title: {
            type: 'plain_text',
            text: 'View Message',
          },
          close: {
            type: 'plain_text',
            text: 'Close',
          },
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: '*Your secure message:*',
              },
            },
            {
              type: 'section',
              text: {
                type: 'plain_text',
                text: 'This is a hardcoded secret message. (Replace with DB fetch result)',
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
                  text: ':hourglass: Expires <!date^1753555200^{date} at {time}|August 25, 2025 10:00AM>',
                },
              ],
            },
            {
              type: 'context',
              elements: [
                {
                  type: 'mrkdwn',
                  text: ':information_source: *Privacy Notice:* Messages sent with Blink in direct messages (DMs) are temporarily stored by Blink until they expire. However, messages sent in channels are never stored by Blink. For maximum privacy, we recommend using Blink in channels rather than DMs.',
                },
              ],
            },
          ],
        },
      });
      // await client.chat.postMessage({
      //   channel: body.channel.id,
      //   text: 'HEYY! Learn more about Blink at https://blink.com',
      // });
      // await ack("It won't work");
      // await client.chat.postMessage({
      //   channel: body.user.id,
      //   text: 'Learn more about Blink at https://blink.com',
      // });
    }
  );

  app.action(
    slack_actions.user_message_expiration_selected,
    userMessageExpirationSelectedActionHandler
  );

  app.event(slack_events.bot_events.app_home_opened, appHomeOpenedEventHandler);
};

configureCommands(app);

const handler = serverless(expressReceiver.app);
module.exports.handler = async (event, context) => {
  // Check if this is a warm-up request
  if (event.source === 'aws.events') {
    console.log('Warm-up request received. Keeping the Lambda warm.');

    return {
      statusCode: 200,
      body: JSON.stringify('Lambda is warm!'),
    };
  }

  const result = await handler(event, context);
  return result;
};

// TODO: Fix cold starts, taking more than 3 secs by reducing bundle size

// TODO: a bug in prod: https://github.com/slackapi/bolt-js/issues/462
