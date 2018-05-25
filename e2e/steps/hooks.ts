import {AfterAll, BeforeAll, setDefaultTimeout} from 'cucumber';
import {getLogger} from 'log4js';
import {options} from 'config';
import {browser} from 'protractor';

const log = getLogger('hooks');

BeforeAll(async () => {
  await browser.waitForAngularEnabled(options.waitForAngular);
  await setDefaultTimeout(options.cucumberDefaultTimeout * 1000);

  log.info(`[RUN_CONFIG] waitForAngularEnabled: ${await browser.waitForAngularEnabled()}`);
  log.info(`[RUN_CONFIG] defaultTimeout: ${options.cucumberDefaultTimeout} sec`);
});

AfterAll(async () => {
  await browser.sleep(2000);
  await browser.quit();
});
