import {
  AllMiddlewareArgs,
  SlackActionMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { UserMessageRepository } from '../repositories/user-message.repository';

export class ViewDmMessageActionHandler {
  constructor(private readonly userMessageRepository: UserMessageRepository) {}

  public handle = async ({
    ack,
    body,
    client,
    logger,
    action,
  }: SlackActionMiddlewareArgs &
    AllMiddlewareArgs<StringIndexed>): Promise<void> => {
    await ack();

    const messageId = action['value'];
    const trigger_id = body['trigger_id'];
    const message = (
      await this.userMessageRepository.getValidOrDeleteExpiredMessage(messageId)
    )?.text;

    await client.views.open({
      trigger_id: trigger_id,
      view: {
        type: 'modal',
        title: {
          type: 'plain_text',
          text: 'Blink: View Message',
        },
        close: {
          type: 'plain_text',
          text: 'Close',
        },
        blocks: message
          ? [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: '*Your secure message:*',
                },
              },
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: message,
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
                    text: ':information_source: *Privacy Notice:* Messages sent with Blink in direct messages (DMs) are temporarily stored by Blink until they expire. However, messages sent in channels are never stored by Blink. For maximum privacy, we recommend using Blink in channels rather than DMs.',
                  },
                ],
              },
            ]
          : [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: 'This message has expired or does not exist.',
                },
              },
            ],
      },
    });
  };
}
