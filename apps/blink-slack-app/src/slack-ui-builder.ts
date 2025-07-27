import {
  AnyBlock,
  Block,
  ContextBlockElement,
  KnownBlock,
} from '@slack/web-api';
import { slack_actions } from './slack-actions';

const EXPIRATION_OPTIONS = [
  { label: '5 mins', value: '5m' },
  { label: '1 hour', value: '1h' },
  { label: '6 hours', value: '6h' },
  { label: '12 hours', value: '12h' },
  { label: '24 hours', value: '24h' },
  { label: '7 days', value: '168h' },
];

export class SlackUiBuilder {
  private buildExpiresAt(expirationTimeInSecs: number): ContextBlockElement {
    const expirationTimestampInSecs =
      Math.floor(Date.now() / 1000) + expirationTimeInSecs;

    return {
      type: 'mrkdwn',
      text: `:hourglass: Expires <!date^${expirationTimestampInSecs}^{date} at {time}|${new Date(
        expirationTimestampInSecs * 1000
      ).toLocaleString()}>`,
    };
  }

  buildChannelMessage(
    commandUserId: string,
    commandText: string,
    expirationTimeInSecs: number
  ): (Block | KnownBlock)[] {
    return [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:dash: _<@${commandUserId}> sent this disappearing message using blink_`,
        },
        accessory: {
          type: 'overflow',
          action_id: slack_actions.message_menu,
          options: [
            {
              text: {
                type: 'plain_text',
                emoji: true,
                text: ':wastebasket:  Delete message',
              },
              value: 'value-0',
            },
          ],
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${commandText}`,
        },
      },
      { type: 'divider' },
      {
        type: 'context',
        elements: [this.buildExpiresAt(expirationTimeInSecs)],
      },
    ];
  }

  buildPrivateMessage(
    commandUserId: string,
    messageId: string,
    expirationTimeInSecs: number
  ): (Block | KnownBlock)[] {
    return [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:dash: <@${commandUserId}> sent this disappearing message using blink`,
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Message',
              emoji: true,
            },
            action_id: slack_actions.view_dm_message,
            value: messageId,
            style: 'primary',
          },
        ],
      },
      { type: 'divider' },
      {
        type: 'context',
        elements: [this.buildExpiresAt(expirationTimeInSecs)],
      },
    ];
  }

  buildPrivateMessageViewer(message?: string): AnyBlock[] {
    if (!message) {
      return [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'This message has expired or does not exist.',
          },
        },
      ];
    }

    return [
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
    ];
  }

  buildAppHomeTab(existingSetting: string): AnyBlock[] {
    return [
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
    ];
  }

  buildExpiredMessage(eventUserId: string): (Block | KnownBlock)[] {
    return [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:dash: _<@${eventUserId}> sent this disappearing message using blink_`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `_This message expired on <!date^${Math.floor(
            Date.now() / 1000
          )}^{date} at {time}|${new Date(
            Math.floor(Date.now() / 1000) * 1000
          ).toLocaleString()}>_`,
        },
      },
    ];
  }
}
