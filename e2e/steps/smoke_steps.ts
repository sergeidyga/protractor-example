import {Then} from 'cucumber';
import {expect} from 'chai';
import {driver} from '../../utils';
import {CareersPo} from '../pages';

const careersPo: CareersPo = new CareersPo();

Then(/^I am on "(.*)" page$/, {timeout: 60 * 1000}, async (url) => {
  await driver.navigateTo(url);
});

Then(/^page title is "(.*)"$/, async (title) => {
  expect(driver.getTitle()).to.equal(title);
});

Then(/^heading text is displayed$/, async () => {
  const t = careersPo.getWelcomeText();
  await expect(t).not.to.be.empty;
});
