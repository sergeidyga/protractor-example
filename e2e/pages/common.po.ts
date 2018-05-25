import {$, ElementFinder} from 'protractor';
import {driver} from '../../utils';

export class CommonPo {
  public header: ElementFinder;

  constructor() {
    this.header = $('#app h1');
  }

  getHeaderText() {
    return driver.getText(this.header);
  }
}
