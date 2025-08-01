import {
  AllMiddlewareArgs,
  SlackActionMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { getMessageCreatedBy } from '../slack-ui-builder';

export class MessageMenuActionHandler {
  public handle = async ({
    ack,
    action,
    body,
    client,
  }: SlackActionMiddlewareArgs &
    AllMiddlewareArgs<StringIndexed>): Promise<void> => {
    await ack();

    if (
      action.type === 'overflow' &&
      action.selected_option.value !== 'value-0'
    ) {
      return;
    }

    if (!('message' in body) || !('container' in body)) {
      return;
    }

    if (getMessageCreatedBy(body.message.text) !== body.user.id) {
      await client.chat.postEphemeral({
        channel: body.channel.id,
        user: body.user.id,
        text: `You're not allowed to delete this message because you didn't send it.`,
      });

      return;
    }

    await client.chat.delete({
      channel: body.channel.id,
      ts: body.container.message_ts,
    });
  };
}
