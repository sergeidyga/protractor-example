import {env, options} from 'config';
import {logger} from './index';
import {getLogger} from 'log4js';
import {browser} from 'protractor';

const log = getLogger('onPrepare');

export default {

  setConfigurations: () => {
    // set:
    logger.level = options.logsLevel;

    // log:
    log.info(`Starting tests...`);

    log.debug(`[ENV_OPTIONS] baseUrl: ${env.host}`);
    log.debug(`[ENV_OPTIONS] browserName: ${env.browserName}`);
    log.debug(`[ENV_OPTIONS] waitForAngular: ${options.waitForAngular}`);

    if (browser.controlFlowIsEnabled()) {
      log.warn(`Deprecated WebDriver ControlFlow is used!`);
    }
  },

};
