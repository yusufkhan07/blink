import {
  AllMiddlewareArgs,
  SlackActionMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { UserMessageRepository } from '../repositories/user-message.repository';
import { SlackUiBuilder } from '../slack-ui-builder';

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
        blocks: this.slackUiBuilder.buildPrivateMessageViewer(message),
      },
    });
  };
}
