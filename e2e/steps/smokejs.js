import {browser} from 'protractor';
import {Then} from 'cucumber';
import {expect} from 'chai';

Then(/^I am on "(.*)" page$/, {timeout: 60 * 1000}, async (url) => {
  await console.log('I open page', url);
  browser.waitForAngularEnabled(false);
  await browser.get(url);
});

Then(/^page title is "(.*)"$/, async (title) => {
  expect(await browser.getTitle()).to.equal(title);
});
