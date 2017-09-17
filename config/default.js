'use strict';

const pkg = require('../package');

module.exports = {
  web: {
    url: 'http://127.0.0.1:8080',
    host: '127.0.0.1',
    port: 8080,
    name: pkg.name
  },
  mysql: {
    host: '127.0.0.1',
    username: 'root',
    password: 'admin',
    port: 3306,
    database: 'express_bbs',
    logging: true
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 1,
    password: ''
  },
  log: {
    dir: '../logs',
    nolog: /\.(js|css|png|jpg|jpeg|ico|svg|gif)/,
    format: ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    replaceConsole: true,
    level: 'AUTO',
    console: true
  },
  session: {
    name: 'claude',
    proxy: true,
    // don't save session if unmodified
    resave: true,
    rolling: true,
    // don't create session until something stored
    saveUninitialized: false,
    secret: 'raymond',
    unset: 'destroy',
    cookie: {
      maxAge: 60 * 1000 * 30
    }
  }
};
