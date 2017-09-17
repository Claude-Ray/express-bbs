'use strict';

const path = require('path');

const config = require('config');
const fse = require('fs-extra');
const log4js = require('log4js');

fse.mkdirsSync(config.log.dir);
fse.mkdirsSync(config.log.dir + '/main');

const log4jsConfig = {
  replaceConsole: config.log.replaceConsole,
  level: config.log.level,
  appenders: {
    out: {
      type: 'console'
    },
    default: {
      type: 'dateFile',
      filename: path.join(config.log.dir, 'main/'),
      pattern: 'yyyyMMdd',
      alwaysIncludePattern: true,
      maxLogSize: 1024 * 1024 * 30,
      backups: 3
    },
    warn: {
      type: 'logLevelFilter',
      level: 'WARN',
      appender: {
        type: 'file',
        filename: path.join(config.log.dir, 'main.warn'),
        maxLogSize: 1024 * 1024 * 30
      }
    },
    error: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: {
        type: 'file',
        filename: path.join(config.log.dir, 'main.error'),
        maxLogSize: 1024 * 1024 * 30
      }
    }
  },
  categories: {
    default: {appenders: ['out', 'default'], level: 'info'},
    warn: {appenders: ['warn'], level: 'warn'},
    error: {appenders: ['error'], level: 'error'}
  }
};

log4js.configure(log4jsConfig);

const logger = log4js.getLogger('default');

logger.log4js = log4js;

module.exports = logger;
