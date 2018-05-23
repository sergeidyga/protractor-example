import {BeforeAll, setDefaultTimeout} from 'cucumber';
import {CareersPo} from '../pages';
import {options} from 'config';
import {getLogger} from 'log4js';
import {browser} from 'protractor';

const careersPo: CareersPo = new CareersPo();
const log = getLogger('hooks');

BeforeAll(async () => {
  // set:
  browser.waitForAngularEnabled(options.waitForAngular);
  setDefaultTimeout(options.cucumberDefaultTimeout * 1000);

  // log:
  log.info(`{TEST_CONFIG} waitForAngularEnabled: ${await browser.waitForAngularEnabled()}`);
  log.info(`[TEST_CONFIG] defaultTimeout: ${options.cucumberDefaultTimeout} sec`);
});
