import {Then} from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {CommonPo} from '../pages/common.po';

chai.use(chaiAsPromised);

const expect = chai.expect;
const commonPo: CommonPo = new CommonPo();

Then(/^menu item "([^"]*)" must have hidden state: "([^"]*)" when mouse is over$/, async (menuName, isHidden) => {
  console.log('!!!');
  const actualState = await commonPo.getMenuState(menuName);
  await expect(actualState).to.equal(isHidden);
});
