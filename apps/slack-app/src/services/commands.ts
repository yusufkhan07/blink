import { App, StringIndexed } from '@slack/bolt';
import { blinkCommandHandler } from '../command-handlers/blink.command-handler';
import { blinkmodaltestCommandHandler } from '../command-handlers/blinkmodaltest.command-handler';

export const configureCommands = (app: App<StringIndexed>) => {
  app.message('hello', async ({ message, say }) => {
    await say(`Hey there <@${message.channel}>!`);
  });

  app.command('/blink', async (params) => {
    await blinkCommandHandler(app, params);
  });

  app.command('/blinkmodaltest', blinkmodaltestCommandHandler);
};

