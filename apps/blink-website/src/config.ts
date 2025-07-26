const SLACK_CLIENT_ID = '819140066320.9092531390403';
const SLACK_SCOPES = [
  'chat:write',
  'chat:write.public',
  'commands',
  'chat:write.customize',
  'users:read',
];

export const SLACK_OAUTH_URL = `https://slack.com/oauth/v2/authorize?scope=${encodeURIComponent(
  SLACK_SCOPES.join(',')
)}&client_id=${SLACK_CLIENT_ID}`;
