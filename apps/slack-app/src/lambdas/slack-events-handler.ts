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
  receiver: expressReceiver
});

export const configureCommands = (app: App<StringIndexed>) => {
  app.command('/blink', blinkCommandHandler);

  app.command('/blinkmodaltest', blinkmodaltestCommandHandler);
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