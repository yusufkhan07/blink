export class Config {
  public readonly slackSigningSecret: string;
  public readonly slackClientId: string;
  public readonly slackClientSecret: string;
  public readonly tableNames: {
    slackOAuthTokensTable: string;
    userMessageExpirationSettingsTable: string;
    userMessagesTable: string;
  };
  public readonly messageExpirationHandlerStateMachineArn: string;

  constructor() {
    this.slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
    this.slackClientId = process.env.SLACK_CLIENT_ID;
    this.slackClientSecret = process.env.SLACK_CLIENT_SECRET;
    this.tableNames = {
      slackOAuthTokensTable: process.env.SLACK_OAUTHTOKENS_TABLENAME,
      userMessageExpirationSettingsTable:
        process.env.USER_MESSAGE_EXPIRATION_SETTINGS_TABLENAME,
      userMessagesTable: process.env.USER_MESSAGES_TABLENAME,
    };
    this.messageExpirationHandlerStateMachineArn =
      process.env.MessageExpirationHandlerStateMachineArn;
  }
}
