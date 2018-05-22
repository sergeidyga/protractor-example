import {$, browser, by, element} from 'protractor';
import {getLogger} from 'log4js';
import {WebElement, WebElementPromise} from 'selenium-webdriver';
import {setDefaultTimeout} from 'cucumber';
import {env} from 'config';

const log = getLogger('protractorWrapper');

export class ProtractorWrapper {
  private static instance: ProtractorWrapper;

  static getInstance() {
    if (!ProtractorWrapper.instance) {
      ProtractorWrapper.instance = new ProtractorWrapper();
    }
    return ProtractorWrapper.instance;
  }

  constructor() {
    log.level = 'debug';
    log.debug('ProtractorWrapper initialized');
    browser.waitForAngularEnabled(false);
    log.debug(`Property "waitForAngularEnabled" is off`);
    setDefaultTimeout(60 * 1000);
  }

  navigateTo(url: string) {
    log.info(`Getting ${url} page...`);
    browser.get(url);
  }

  getText(el: WebElement) {
    log.info(`Getting ${JSON.stringify(el)}`);
    return el.getText().then(t => {
      log.info(t);
      return t;
    });
  }

  getTitle() {
    return browser.getTitle().then(t => {
      log.info(`Getting page title. Title is "${t}"`);
      return t;
    });
  }

}
