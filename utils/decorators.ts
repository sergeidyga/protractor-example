export default {

  myLog(target, key, descriptor) {

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
  }

};
