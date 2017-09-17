'use strict';

const userService = require('../../services/user');

module.exports = {
  signup,
  login,
  logout
};

/**
 * @api POST /signup
 * @desc sign up
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {*}
 */
async function signup(req, res, next) {
  const {name, pass} = req.body;
  const userInfo = await userService.signup({
    name,
    password: pass
  });
  return next({code: 200, msg: 'signup success', ext: userInfo});
}

/**
 * @api {POST} /login
 * @desc log in
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {*}
 */
async function login(req, res, next) {
  const {name, pass} = req.body;
  const userInfo = await userService.login({
    name,
    password: pass
  });
  req.session.user = userInfo;
  return next({code: 200, msg: 'login success', ext: userInfo});
}

/**
 * @api {GET} /logout
 * @desc log out
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {*}
 */
function logout(req, res, next) {
  req.session.destroy();
  // res.clearCookie(req.query.user);
  return next({code: 200, msg: 'logout success'});
}
