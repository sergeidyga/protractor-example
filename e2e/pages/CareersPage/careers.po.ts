import { $, ElementFinder } from 'protractor';
import { env } from 'config';
import {ProtractorWrapper} from '../../../utils/protractorWrapper';

const driver = ProtractorWrapper.getInstance();

export class CareersPo {
  public title: ElementFinder;

  constructor() {
    this.title = $('.section--padding-normal .title h1');
  }

  getWelcomeText() {
    return driver.getText(this.title);
  }
}
