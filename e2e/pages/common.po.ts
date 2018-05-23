import {$$, by, element, ElementFinder} from 'protractor';
import {env} from 'config';
import {ProtractorWrapper} from '../../utils/protractorWrapper';

const driver = ProtractorWrapper.getInstance();

export class CommonPo {
  public subList: ElementFinder;
  public menuItem: ElementFinder;

  constructor() {
    this.subList = $$('.top-navigation__sub-list-wrapper')[0];
    this.menuItem = element(by.xpath('(//*[@class = \'top-navigation__link\'][text() = \'\'])'));
  }

  getMenuState(menuName: string) {
    const menu = element(by.xpath(`(//*[@class = \'top-navigation__link\'][text() = \'${menuName}\'])`));
    return driver.mouseHoverAndGetState(menu, this.subList);
  }
}
