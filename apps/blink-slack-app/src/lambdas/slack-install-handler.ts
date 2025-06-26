import serverless from 'serverless-http';
import { expressReceiver } from '../express-receiver';

// TODO: figure out how oauth would work for org ready apps
// Right now focusing on workspace level app

module.exports.handler = serverless(expressReceiver.app);
