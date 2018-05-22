import {$, browser, by, element, ElementFinder} from 'protractor';
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

  getText(el: ElementFinder) {
    return el.getText().then(text => {
      log.info(`Getting text. Text is "${text}"`);
      return text;
    });
  }

  getTitle() {
    return browser.getTitle().then(title => {
      log.info(`Getting page title. Title is "${title}"`);
      return title;
    });
  }

  mouseHoverAndGetState(elToHover: ElementFinder, elToCheck: ElementFinder) {
    browser.actions().mouseMove(elToHover).perform().then(() => {
      log.info('Hover mouse to get if element is hidden');
      return elToCheck.getCssValue('hidden');
    });
  }

}
