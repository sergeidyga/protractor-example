import {browser, ElementFinder} from 'protractor';
import {getLogger} from 'log4js';
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

  private constructor() {
    log.debug('ProtractorWrapper initialized');
  }

  navigateTo(url: string) {
    log.info(`Getting ${url} page...`);
    return browser.get(url);
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

  // todo
  mouseHoverAndGetState(elToHover: ElementFinder, elToCheck: ElementFinder) {
    browser.actions().mouseMove(elToHover).perform().then(() => {
      log.info('Hover mouse to get if element is hidden');
      return elToCheck.getCssValue('hidden');
    });
  }

}
