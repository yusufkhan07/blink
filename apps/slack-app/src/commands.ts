import { App, StringIndexed } from '@slack/bolt';

const scheduleMessageExpiry = async() => {
  // TODO: How to do this so it works on serverless locally and the cloud as well.
}

export const configureCommands = (app: App<StringIndexed>) => {
  // Listens to incoming messages that contain "hello"
  app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.channel}>!`);
  });

  // This echos back the input
  app.command('/blink', async ({ command, ack, respond, logger }) => {
    await ack();

    // TODO: This should be fetched from settings instead of hard coding it.
    const expirationTimeInSecs = 1; // Set expiration time in seconds (e.g., 1 hour)

    // Calculate expiration timestamp
    const expirationTimestamp =
      Math.floor(Date.now() / 1000) + expirationTimeInSecs;

    try {
      const postedMessage = await app.client.chat.postMessage({
        attachments: [],
        channel: command.channel_id,
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
                  expirationTimeInSecs
                )}`,
              },
            ],
          },
        ],
        text: `:lock: <@${command.user_id}> sent this disappearing message using blink`,
      });

      await scheduleMessageExpiry();
    } catch (err) {
      // TODO: send this error before trying to post the message.
      // Figure out a way to check permissions of the given channel
      if (err.data?.error === 'channel_not_found') {
        respond({
          response_type: 'ephemeral',
          text: 'Please invite Blink to this private/shared channel before using it.',
        });
      }

      console.log(err);
    }
  });

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
