import {$, browser} from 'protractor';
import {Then} from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {ProtractorWrapper} from '../../utils/protractorWrapper';
import {CareersPo} from '../pages/CareersPage/careers.po';

chai.use(chaiAsPromised);

const expect = chai.expect;
const careersPo: CareersPo = new CareersPo();
const driver = ProtractorWrapper.getInstance();

Then(/^I am on "(.*)" page$/, {timeout: 60 * 1000}, async (url) => {
  browser.waitForAngularEnabled(false);
  await driver.navigateTo(url);
});

Then(/^page title is "(.*)"$/, async (title) => {
  expect(await driver.getTitle()).to.equal(title);
});

Then(/^heading text is displayed$/, async () => {
  // const text = await careersPo.getWelcomeText();
  const t = await driver.getText($('.section--padding-normal .title h1'));
  await console.log(t);
  await expect(t).not.to.be.empty;
});
