import { App, StringIndexed } from '@slack/bolt';

export const configureCommands = (app: App<StringIndexed>) => {
  // Listens to incoming messages that contain "hello"
  app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.channel}>!`);
  });

  // This echos back the input
  app.command(
    '/blink-2',
    async ({ command, ack, respond }) => {
      await ack();

      // TODO: This should be fetched from settings instead of hard coding it.
      const expirationTime = 3600; // Set expiration time in seconds (e.g., 1 hour)

      // Calculate expiration timestamp
      const expirationTimestamp =
        Math.floor(Date.now() / 1000) + expirationTime;


      try {
        await respond({
          response_type: 'in_channel',
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `:lock: _<@${command.user_id}> sent this disappearing message using blink_`,
              },
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `${command.text}`,
              },
            },
            {
              type: 'divider',
            },
            {
              type: 'context',
              elements: [
                {
                  type: 'mrkdwn',
                  text: `:hourglass: Expires <!date^${expirationTimestamp}^{date} at {time}|${new Date(
                    expirationTimestamp * 1000
                  ).toLocaleString()}> | :alarm_clock: *Time remaining*: ${formatTimeRemaining(
                    expirationTime
                  )}`,
                },
              ],
            },
          ],
          text: `:lock: _<@${command.user_id}> sent this disappearing message using blink_`,
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
  
  // creates a test modal
  app.command('/blinkmodaltest', async ({ ack, body, client, logger }) => {
    // Acknowledge the command request
    await ack();

    try {
      // Call views.open with the built-in client
      const result = await client.views.open({
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload
        view: {
          type: 'modal',
          // View identifier
          callback_id: 'view_1',
          title: {
            type: 'plain_text',
            text: 'Modal title',
          },
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: 'Welcome to a modal with _blocks_',
              },
              accessory: {
                type: 'button',
                text: {
                  type: 'plain_text',
                  text: 'Click me!',
                },
                action_id: 'button_abc',
              },
            },
            {
              type: 'input',
              block_id: 'input_c',
              label: {
                type: 'plain_text',
                text: 'What are your hopes and dreams?',
              },
              element: {
                type: 'plain_text_input',
                action_id: 'dreamy_input',
                multiline: true,
              },
            },
          ],
          submit: {
            type: 'plain_text',
            text: 'Submit',
          },
        },
      });
      logger.info(result);
    } catch (error) {
      logger.error(error);
    }
  });
};

function formatTimeRemaining(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
