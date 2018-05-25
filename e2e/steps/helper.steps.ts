import {Then, When} from 'cucumber';
import {expect} from 'chai';
import {driver as i} from '../../utils';
import {browser} from 'protractor';

const myLog = (target, key, descriptor) => {

  // save a reference to the original method this way we keep the values currently in the
  // descriptor and don't overwrite what another decorator might have done to the descriptor.
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  const originalMethod = descriptor.value;

  // editing the descriptor/value parameter
  descriptor.value = () => {
    const args = ['info'];
    // for (let _i = 0; _i < arguments.length; _i++) {
    //   args[_i] = arguments[_i];
    // }
    const a = args.map(arg => JSON.stringify(arg)).join();
    // note usage of originalMethod here
    const result = originalMethod.apply(this, args);
    const r = JSON.stringify(result);
    console.log('Call: ' + key + '(' + a + ') => ' + r);
    return result;
  };

  // return edited descriptor as opposed to overwriting the descriptor
  return descriptor;
};

const log = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
  return {
    value: function( ... args: any[]) {
      console.log('Arguments: ', args.join(', '));
      const result = descriptor.value.apply(target, args);
      console.log('Result: ', result);
      return result;
    }
  };
};

// Atomic functions:

When('open page {string}', {timeout: 60 * 1000}, async (name) => {
  // put decorator somewhere here to add logs
  /*
dataContainer.currentPage.set(title)
currentPage = {
 name: '',
 title: '',
 url: ''
 pageObject: {},
}
   */



@log
  await browser.get(/*get url from dataContainer*/name);
});









// Assertions:

Then('page title is {string}', async (title) => {
  // todo helpers for expects:
  // what should be:
  // await i.see('Home Page').inTitle(); or .in({title});    --> expect(i.getTitle()).equals('Home Page');
  // await i.see('Login'); --> expect(element(by.cssContainsText('Login'))).isPresent();
  // await i.see('Login').in(LoginField); --> expect(LoginField.getText()).equals('Login');
  await expect(i.getTitle()).equals(title);
});


Then('see {string} in {word}', async (expected, elementName) => {
  // todo helpers for expects:
  // Ex: Then see 'Welcome' in popupDialog
  // what should be:
  // expect(await dc.currentPage[elementName].getText()).equals(expected);
});
