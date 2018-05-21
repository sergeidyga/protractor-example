import {$, browser, by, element} from 'protractor';
import {getLogger} from 'log4js';
import {WebElement, WebElementPromise} from 'selenium-webdriver';
import {setDefaultTimeout} from 'cucumber';

const log = getLogger();

export class ProtractorWrapper {
  constructor() {
    log.level = 'info';
    browser.waitForAngularEnabled(false);
    setDefaultTimeout(60 * 1000);
    log.info(`Property "waitForAngularEnabled" is off`);
  }

  getText(el: WebElement) {
    log.info(`getting ${el.getAttribute('css')}`);
    return el.getText();
  }

}
