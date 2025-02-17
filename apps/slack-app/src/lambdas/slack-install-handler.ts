import { ExpressReceiver, FileInstallationStore } from '@slack/bolt';
import serverless from 'serverless-http';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app

const expressReceiver = new ExpressReceiver({
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
  // TODO: Store in DB instead of File
  installationStore: new FileInstallationStore(),
});

module.exports.handler = serverless(expressReceiver.app);
