import {
  AllMiddlewareArgs,
  SlackEventMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';
import { SlackUiBuilder } from '../slack-ui-builder';

export class AppHomeOpenedEventHandler {
  constructor(
    private readonly userMessageExpirationSettingsRepository: UserMessageExpirationSettingsRepository,
    private readonly slackUiBuilder: SlackUiBuilder
  ) {}

  public handle = async ({
    event,
    client,
  }: SlackEventMiddlewareArgs<'app_home_opened'> &
    AllMiddlewareArgs<StringIndexed>) => {
    const existingSetting =
      (await this.userMessageExpirationSettingsRepository.getExpirationTime(
        event.user
      )) ?? '24h';

    await client.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        blocks: this.slackUiBuilder.buildAppHomeTab(existingSetting),
      },
    });
  };
}
