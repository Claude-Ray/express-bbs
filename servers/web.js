'use strict';

const _ = require('lodash');
const bodyParser = require('body-parser');
const compression = require('compression');
const config = require('config');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const responseTime = require('response-time');
const SessStore = require('connect-redis')(expressSession);

const db = require('./models');
const finalResp = require('../middlewares/final-resp');
const logger = require('../tools/logger');
const router = require('../routes');

const app = express();

app.disable('x-powered-by');

app.use(compression());

app.use(responseTime());

app.use(logger.log4js.connectLogger(logger, config.log));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession(_.merge(config.session, {
  name: 'test',
  proxy: true,
  resave: true,
  saveUninitialized: false,
  secret: 'secret',
  store: new SessStore(config.redisSession),
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
})));

app.use(router);

app.use((req, res, next) => {
  next({ status: 'pageNotFount', code: 404 });
});

// error handler
app.use(finalResp({
  format: 'JSON',
  encoding: 'utf8',
  views: {}
}));

function start() {
  app.listen(config.web.port, () => {
    logger.info(config.web.name, config.web.url, 'start up');
  });
  return db.sequelize.sync({ force: false }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

exports.start = start;
