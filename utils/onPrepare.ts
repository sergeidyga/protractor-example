import {env, options} from 'config';
import {logger} from './index';
import {getLogger} from 'log4js';

const log = getLogger('onPrepare');

export = {

  setConfigurations: () => {
    // set:
    logger.level = options.logsLevel;

    // log:
    log.info(`Starting tests... ENV: ${JSON.stringify(process.env.NODE_ENV)}`);
    log.debug(`[ENV_OPTIONS] browserName: ${env.browserName}`);
    log.debug(`[ENV_OPTIONS] waitForAngular: ${options.waitForAngular}`);
  },

};
