import { App, StringIndexed } from '@slack/bolt';

export const configureCommands = (app: App<StringIndexed>) => {
  // Listens to incoming messages that contain "hello"
  app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.channel}>!`);
  });

  app.command('/blink', async ({ command, ack, respond }) => {
    // Acknowledge command request
    await ack();

    await respond(`Server received your command: ${command.text}`);
  });
};
