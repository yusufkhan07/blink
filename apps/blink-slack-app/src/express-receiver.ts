import {
  ExpressReceiver,
  Installation,
  InstallationQuery,
  InstallationStore,
} from '@slack/bolt';
import { SlackOAuthTokensRepository } from './repositories/slack-oAuth-token.repository';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app

// interesting installation handler for orgs: https://github.com/slackapi/bolt-js/issues/1443

class DynamoDbInstallationStore implements InstallationStore {
  constructor(
    private readonly slackOAuthTokensRepository: SlackOAuthTokensRepository
  ) {}

  storeInstallation = (installation: Installation): Promise<void> => {
    return this.slackOAuthTokensRepository.storeInstallation(installation);
  };

  fetchInstallation = async (installQuery: InstallationQuery<boolean>) => {
    return await this.slackOAuthTokensRepository.fetchInstallation(
      installQuery.teamId
    );
  };

  deleteInstallation = (
    installQuery: InstallationQuery<boolean>
  ): Promise<void> => {
    return this.slackOAuthTokensRepository.deleteInstallation(
      installQuery.teamId
    );
  };
}

export const expressReceiver = (
  slackOAuthTokensRepository: SlackOAuthTokensRepository,
  {
    signingSecret,
    clientId,
    clientSecret,
  }: {
    signingSecret: string;
    clientId: string;
    clientSecret: string;
  }
) => {
  const installationStore = new DynamoDbInstallationStore(
    slackOAuthTokensRepository
  );

  return new ExpressReceiver({
    signingSecret,
    clientId,
    clientSecret,
    stateSecret: 'SLACK_STATE_SECRET',
    processBeforeResponse: true,
    // TODO: load from manifest file
    scopes: [
      'chat:write',
      'chat:write.public',
      'commands',
      'chat:write.customize',
      'users:read',
    ],
    installerOptions: {
      installPath: '/slack/install',
      redirectUriPath: '/slack/oauth_redirect',
      // TODO: this must be set to true
      stateVerification: false,
    },
    installationStore,
  });
};
