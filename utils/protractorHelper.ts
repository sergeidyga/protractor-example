import 'reflect-metadata';
import {browser, ElementFinder} from 'protractor';
import {getLogger} from 'log4js';
import {env} from 'config';

const log = getLogger('ProtractorHelper');

export class ProtractorHelper {
  private static instance: ProtractorHelper;

  static getInstance(): ProtractorHelper {
    if (!ProtractorHelper.instance) {
      ProtractorHelper.instance = new ProtractorHelper();
    }
    return ProtractorHelper.instance;
  }

  private constructor() {
    log.debug('ProtractorHelper initialized');
  }

  async open(url: string): Promise<void> {
    await browser.get(url);
    log.info(`Getting ${url} page...`);
    log.info(`Current url: ${browser.getCurrentUrl()}`);
  }

  async getText(el: ElementFinder): Promise<string> {
    const text = await el.getText();
    log.info(`Text = ${text}`);
    return text;
  }

  async getTitle(): Promise<string> {
    const title = await browser.getTitle();
    log.info(`Getting page title. Title is "${title}"`);
    return title;
  }


  // Assertions:

  async see(): Promise<boolean> {
    return true;
  }

}
