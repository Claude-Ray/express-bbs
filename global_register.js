'use strict';

global.fs = require('fs');
global.path = require('path');

global._ = require('lodash');
global.config = require('config');
global.Promise = require('bluebird');

global.db = require('./models');
global.logger = require('./tools/logger');
