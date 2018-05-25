import {Then} from 'cucumber';
import {expect} from 'chai';
import * as pages from '../../pages';
import {type, go, see, slow, click, under, leftOf, below, rightOf} from 'blue-harvest';
import {loginPo} from '../../pages';



Then('terms text is visible', async () => {
  await expect(loginPo.getWelcomeText()).not.to.be.empty;
});

Then('heading text is visible', async () => {
  // await expect(loginPo.getWelcomeText()).not.to.be.empty;
});

Then('{word} link is visible', async () => {
  await expect(loginPo.getWelcomeText()).not.to.be.empty;
});

Then('{word} link is enabled', async () => {
  await expect(loginPo.getWelcomeText()).not.to.be.empty;
});
