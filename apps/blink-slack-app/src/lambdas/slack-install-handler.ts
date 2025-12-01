import serverless from 'serverless-http';
import { expressReceiver } from '../express-receiver';
import { SlackOAuthTokensRepository } from '../repositories/slack-oAuth-token.repository';
import { Config } from '../config';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app
const config = new Config();

const slackOAuthTokensRepository = new SlackOAuthTokensRepository(
  config.tableNames.slackOAuthTokensTable
);

const expressReceiverObject = expressReceiver(slackOAuthTokensRepository, {
  signingSecret: config.slackSigningSecret,
  clientId: config.slackClientId,
  clientSecret: config.slackClientSecret,
});

module.exports.handler = serverless(expressReceiverObject.app);
