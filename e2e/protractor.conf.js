const { env } = require('config');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/*.feature'
  ],
  capabilities: {
    browserName: env.browserName,
    chromeOptions: {
      args: env.browserOptions
    }
  },
  directConnect: true,
  baseUrl: env.host,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['../typeScript/*.js', './steps/*.js'],
    strict: true,
    compiler: 'ts:ts-node/register',
    format: ['snippets:reports/output.txt', 'progress-bar'],
    ignoreUncaughtExceptions: true
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
