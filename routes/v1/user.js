'use strict';

const user = require('../../controllers/v1/user');

module.exports = router => {
  router.post('/user/signup', user.signup);
  router.post('/user/login', user.login);
  router.get('/user/logout', user.logout);
};
