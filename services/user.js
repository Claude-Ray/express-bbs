'use strict';

module.exports = {
  signup,
  login
};

function signup(obj) {
  return db.User.create({
    name: obj.name,
    password: obj.password,
    createTime: Date.now(),
    updateTime: Date.now()
  });
}

function login(obj) {
  return db.User.findOne({
    where: {name: obj.name, password: obj.password}
  });
}
