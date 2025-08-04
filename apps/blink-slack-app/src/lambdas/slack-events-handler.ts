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
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';
import { UserMessageRepository } from '../repositories/user-message.repository';
import { SlackOAuthTokensRepository } from '../repositories/slack-oAuth-token.repository';
import { Config } from '../config';
import { SlackUiBuilder } from '../slack-ui-builder';
import { MetricsRepository } from '../repositories/metrics.repository';

const config = new Config();

const slackUiBuilder = new SlackUiBuilder();

// Repositories
const slackOAuthTokensRepository = new SlackOAuthTokensRepository(
  config.tableNames.slackOAuthTokensTable
);
const userMessageExpirationSettingsRepository =
  new UserMessageExpirationSettingsRepository(
    config.tableNames.userMessageExpirationSettingsTable
  );
const userMessageRepository = new UserMessageRepository(
  config.tableNames.userMessagesTable
);
const metricsRepository = new MetricsRepository(config.tableNames.metricsTable);

// Handlers
const blinkCommandHandler = new BlinkCommandHandler(
  config.messageExpirationHandlerStateMachineArn,
  userMessageExpirationSettingsRepository,
  userMessageRepository,
  metricsRepository,
  slackUiBuilder
).handle;
const messageMenuActionHandler = new MessageMenuActionHandler().handle;
const viewDmMessageActionHandler = new ViewDmMessageActionHandler(
  userMessageRepository,
  slackUiBuilder
).handle;
const userMessageExpirationSelectedActionHandler =
  new UserMessageExpirationSelectedActionHandler(
    userMessageExpirationSettingsRepository
  ).handle;
const appHomeOpenedEventHandler = new AppHomeOpenedEventHandler(
  userMessageExpirationSettingsRepository,
  slackUiBuilder
).handle;

// Build the app
// Note: The expressReceiver is used to handle Slack events and commands
const expressReceiverObject = expressReceiver(slackOAuthTokensRepository, {
  signingSecret: config.slackSigningSecret,
  clientId: config.slackClientId,
  clientSecret: config.slackClientSecret,
});

const app = new App({
  receiver: expressReceiverObject,
});

// TODO: add global error handler for the app

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

module.exports.handler = serverless((event, context) => {
  // Check if this is a warm-up request
  if (event.source === 'aws.events') {
    console.log('Warm-up request received. Keeping the Lambda warm.');

    return {
      statusCode: 200,
      body: JSON.stringify('Lambda is warm!'),
    };
  }

  return expressReceiverObject.app(event, context);
});

// TODO: Fix cold starts, taking more than 3 secs by reducing bundle size

// TODO: a bug in prod: https://github.com/slackapi/bolt-js/issues/462
