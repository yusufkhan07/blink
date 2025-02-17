import { App, StringIndexed } from '@slack/bolt';
import serverless from 'serverless-http';
import { blinkCommandHandler } from '../command-handlers/blink.command-handler';
import { expressReceiver } from '../express-receiver';
import { blinkmodaltestCommandHandler } from '../command-handlers/blinkmodaltest.command-handler';

// TODO: setup prettier
// TODO: setup vs code auto formatting on save

// Feature 1:
// User types /blink message
// It's displayed ONCE for EACH User in Chat

const app = new App({
  receiver: expressReceiver,
  processBeforeResponse: false,
});

export const configureCommands = (app: App<StringIndexed>) => {
  app.command('/blink', blinkCommandHandler);

  app.command('/blinkmodaltest', blinkmodaltestCommandHandler);
};

configureCommands(app);

module.exports.handler = serverless(expressReceiver.app);

// TODO: a bug in prod: https://github.com/slackapi/bolt-js/issues/462