const User = require('../mongoose/user');
const {
  NoUserFound,
  MissingUsernameOrPassword,
  InvalidUsernameOrPassword,
} = require('./errors');
const logger = require('../services/logger');

const mongooseHelper = {};

mongooseHelper.findUsers = async filter => {
  try {
    let users = await User.find(filter);
    return users;
  } catch (e) {
    return e;
  }
};

mongooseHelper.checkUser = async filter => {
  let user = await User.findOne(filter);
  if (user) {
    return user;
  } else {
    throw new NoUserFound();
  }
};

mongooseHelper.checkForUsernameAndPassword = (username, password) => {
  if (username && password) {
    return true;
  } else {
    throw new MissingUsernameOrPassword();
  }
};

// TODO: ADD NON PLAIN TEXT PASSWORDS
mongooseHelper.verifyPassword = async (userDoc, password) => {
  if (userDoc.password === password) {
    return true;
  } else {
    throw new InvalidUsernameOrPassword();
  }
};

module.exports = mongooseHelper;
module.exports.checkUser = mongooseHelper.checkUser;
module.exports.verifyPassword = mongooseHelper.verifyPassword;
