import {
  AllMiddlewareArgs,
  SlackEventMiddlewareArgs,
  StringIndexed,
} from '@slack/bolt';
import { slack_actions } from '../slack-actions';
import { UserMessageExpirationSettingsRepository } from '../repositories/user-message-expiration-settings.repository';

const EXPIRATION_OPTIONS = [
  { label: '5 mins', value: '5m' },
  { label: '1 hour', value: '1h' },
  { label: '6 hours', value: '6h' },
  { label: '12 hours', value: '12h' },
  { label: '24 hours', value: '24h' },
  { label: '7 days', value: '168h' },
];

export class AppHomeOpenedEventHandler {
  constructor(
    private readonly userMessageExpirationSettingsRepository: UserMessageExpirationSettingsRepository
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
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📅 Message Expiration Settings',
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Choose how long your messages should last. This setting applies *only to new messages* you send using Blink.',
            },
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'static_select',
                action_id: slack_actions.user_message_expiration_selected,
                placeholder: {
                  type: 'plain_text',
                  text: 'Select expiration time',
                  emoji: true,
                },
                options: EXPIRATION_OPTIONS.map((opt) => ({
                  text: {
                    type: 'plain_text',
                    text:
                      opt.value == existingSetting
                        ? `*${opt.label} (Current setting)*`
                        : opt.label,
                    emoji: true,
                  },
                  value: opt.value,
                })),
              },
            ],
          },
        ],
      },
    });
  };
}
