import { ExpressReceiver, InstallationStore } from '@slack/bolt';
import { SlackOAuthTokensRepository } from './repositories/slack-oAuth-token.repository';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app

// interesting installation handler for orgs: https://github.com/slackapi/bolt-js/issues/1443

const slackOAuthTokensRepository = new SlackOAuthTokensRepository();

const dynamoDbInstallationStore: InstallationStore = {
  storeInstallation: slackOAuthTokensRepository.storeInstallation,
  fetchInstallation: async (installQuery) => {
    return await slackOAuthTokensRepository.fetchInstallation(
      installQuery.teamId
    );
  },
  deleteInstallation: (installQuery) => {
    return slackOAuthTokensRepository.deleteInstallation(installQuery.teamId);
  },
};

export const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: 'SLACK_STATE_SECRET',
  // TODO: load from manifest file
  scopes: ['chat:write', 'chat:write.public', 'commands'],
  installerOptions: {
    installPath: '/slack/install',
    redirectUriPath: '/slack/oauth_redirect',
    // TODO: this must be set to true
    stateVerification: false,
  },
  installationStore: dynamoDbInstallationStore,
});
