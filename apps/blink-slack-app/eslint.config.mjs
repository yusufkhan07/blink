import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    // Ignore serverless compiled code.
    ignores: ['.serverless'],
  },
];
