export default {
  env: {
    host: 'https://www.visualcv.com',
    browserName: 'chrome',
    browserOptions: ['disable-infobars', '--log-level=3', '--headless', '--disable-extensions']
  },
  options: {
    cucumberDefaultTimeout: 60,
    waitForAngular: false,
    logsLevel: 'debug'
  }
};
