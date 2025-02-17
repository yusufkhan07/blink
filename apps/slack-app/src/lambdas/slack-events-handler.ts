import { App, AwsLambdaReceiver } from '@slack/bolt';
import { configureCommands } from '../services/commands';

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

configureCommands(app);

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
