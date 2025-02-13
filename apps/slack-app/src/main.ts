import { App } from '@slack/bolt';
import { configureCommands } from './commands';

// TODO: setup prettier
// TODO: setup vs code auto formatting on save

// Feature 1: 
// User types /blink message 
// It's displayed ONCE for EACH User in Chat

// Feature 2:
// User types /blink message expiry 1 hour
// It expires after 1 hour.

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

configureCommands(app);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  app.logger.info('⚡️ Bolt app is running!');
})();