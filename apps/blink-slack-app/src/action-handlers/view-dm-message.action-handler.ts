import {
  AllMiddlewareArgs,
  SlackActionMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { UserMessageRepository } from '../repositories/user-message.repository';
import { SlackUiBuilder } from '../slack-ui-builder';
import { getMessageCreatedBy } from './message-menu.action-handler';

export class ViewDmMessageActionHandler {
  constructor(
    private readonly userMessageRepository: UserMessageRepository,
    private readonly slackUiBuilder: SlackUiBuilder
  ) {}

  public handle = async ({
    ack,
    body,
    client,
    logger,
    action,
    respond,
  }: SlackActionMiddlewareArgs &
    AllMiddlewareArgs<StringIndexed>): Promise<void> => {
    await ack();

    const messageId = action['value'];
    const trigger_id = body['trigger_id'];
    const message = (
      await this.userMessageRepository.getValidOrDeleteExpiredMessage(messageId)
    )?.text;

    if (!message) {
      const messageSenderId = getMessageCreatedBy(
        body['message']['blocks'][0]['text']['text']
      );

      await respond({
        text: ':dash: _<@${event.user_id}> sent this disappearing message using blink_',
        // TODO: We need to pass expiration time as well.
        blocks: this.slackUiBuilder.buildExpiredMessage(messageSenderId),
      });

      return;
    }

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
        blocks: this.slackUiBuilder.buildPrivateMessageViewer(message),
      },
    });
  };
}
