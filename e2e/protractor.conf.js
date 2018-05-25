const {env} = require('config');
const prepare = require('../typeScript/utils/onPrepare')['default'];

exports.config = {
  logLevel: 'WARN',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  specs: [
    './features/*/*.feature'
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
    require: ['../typeScript/e2e/steps/*.js'],
    strict: true,
    compiler: 'ts:ts-node/register',
    format: ['json:reports/cucumber_report.json', 'progress'],
    ignoreUncaughtExceptions: true,
    tags: ['@Smoke'],
    dryRun: false
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    prepare.setConfigurations();
  }
};
