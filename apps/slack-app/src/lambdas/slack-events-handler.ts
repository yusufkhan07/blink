import { App, AwsLambdaReceiver, StringIndexed } from '@slack/bolt';
import { blinkCommandHandler } from '../command-handlers/blink.command-handler';
import { blinkmodaltestCommandHandler } from '../command-handlers/blinkmodaltest.command-handler';

// TODO: setup prettier
// TODO: setup vs code auto formatting on save

// Feature 1:
// User types /blink message
// It's displayed ONCE for EACH User in Chat

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

export const configureCommands = (app: App<StringIndexed>) => {
  app.message('hello', async ({ message, say }) => {
    await say(`Hey there <@${message.channel}>!`);
  });

  app.command('/blink', async (params) => {
    await blinkCommandHandler(app, params);
  });

  app.command('/blinkmodaltest', blinkmodaltestCommandHandler);
};

configureCommands(app);

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
