import {
  AllMiddlewareArgs,
  SlackActionMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';

export class UserMessageExpirationSelectedActionHandler {
  constructor(
    private readonly userMessageExpirationSettingsRepository: UserMessageExpirationSettingsRepository
  ) {}

  public handle = async ({
    ack,
    action,
    body,
  }: SlackActionMiddlewareArgs &
    AllMiddlewareArgs<StringIndexed>): Promise<void> => {
    await ack();

    if (action.type !== 'static_select') {
      return;
    }

    await this.userMessageExpirationSettingsRepository.saveExpirationTime(
      body.user.id,
      action.selected_option.value
    );
  };
}
