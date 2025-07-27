import { App, StringIndexed } from '@slack/bolt';
import serverless from 'serverless-http';
import { BlinkCommandHandler } from '../command-handlers/blink.command-handler';
import { expressReceiver } from '../express-receiver';
import { blinkmodaltestCommandHandler } from '../command-handlers/blinkmodaltest.command-handler';
import { slack_actions } from '../slack-actions';
import { MessageMenuActionHandler } from '../action-handlers/message-menu.action-handler';
import { slack_events } from '../slack-events';
import { AppHomeOpenedEventHandler } from '../event-handlers/app-home-opened.event-handler';
import { UserMessageExpirationSelectedActionHandler } from '../action-handlers/user-message-expiration-selected.action-handler';
import { ViewDmMessageActionHandler } from '../action-handlers/view-dm-message.action-handler';

// TODO: setup prettier
// TODO: setup vs code auto formatting on save

// Feature 1:
// User types /blink message
// It's displayed ONCE for EACH User in Chat

const app = new App({
  receiver: expressReceiver,
});

const blinkCommandHandler = new BlinkCommandHandler(
  process.env.MessageExpirationHandlerStateMachineArn
).handle;
const messageMenuActionHandler = new MessageMenuActionHandler().handle;
const viewDmMessageActionHandler = new ViewDmMessageActionHandler().handle;
const userMessageExpirationSelectedActionHandler =
  new UserMessageExpirationSelectedActionHandler().handle;
const appHomeOpenedEventHandler = new AppHomeOpenedEventHandler().handle;

// Configure the app with commands, actions, and events
((app: App<StringIndexed>) => {
  // Configure commands
  (() => {
    app.command('/blink', blinkCommandHandler);

    app.command('/blinkmodaltest', blinkmodaltestCommandHandler);
  })();

  // Configure actions
  (() => {
    app.action(slack_actions.message_menu, messageMenuActionHandler);

    app.action(slack_actions.view_dm_message, viewDmMessageActionHandler);

    app.action(
      slack_actions.user_message_expiration_selected,
      userMessageExpirationSelectedActionHandler
    );
  })();

  // Configure events
  (() => {
    app.event(
      slack_events.bot_events.app_home_opened,
      appHomeOpenedEventHandler
    );
  })();
})(app);

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
