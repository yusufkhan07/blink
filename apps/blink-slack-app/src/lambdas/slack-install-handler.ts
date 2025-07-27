import serverless from 'serverless-http';
import { expressReceiver } from '../express-receiver';
import { SlackOAuthTokensRepository } from '../repositories/slack-oAuth-token.repository';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app

const slackOAuthTokensRepository = new SlackOAuthTokensRepository(
  process.env.SLACK_OAUTHTOKENS_TABLENAME
);

const expressReceiverObject = expressReceiver(slackOAuthTokensRepository, {
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
});

module.exports.handler = serverless(expressReceiverObject.app);
