import {
  AllMiddlewareArgs,
  SlackEventMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';

export const appHomeOpenedEventHandler = async ({
  event,
  client,
}: SlackEventMiddlewareArgs<'app_home_opened'> &
  AllMiddlewareArgs<StringIndexed>) => {
  await client.views.publish({
    user_id: event.user,
    view: {
      type: 'home',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Welcome to Blink!',
          },
        },
      ],
    },
  });
};
