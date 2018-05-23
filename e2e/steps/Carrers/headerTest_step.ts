import {Then} from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {CareersPo} from '../../pages/CareersPage/careers.po';
import {ProtractorWrapper} from '../../../utils/protractorWrapper';

chai.use(chaiAsPromised);

const expect = chai.expect;
const careersPo: CareersPo = new CareersPo();
const driver = ProtractorWrapper.getInstance();

Then(/^I am good$/, {timeout: 60 * 1000}, async (url) => {
  await driver.navigateTo(url);
});
