import { browser, by, element } from 'protractor';
import { env } from 'config';
import { getLogger } from 'log4js';

export class AppPage {
  navigateTo() {
    const log = getLogger();
    log.level = 'info';
    log.info(`Getting ${env.host} page...`);
    browser.waitForAngularEnabled(false);
    return browser.get(env.host);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
