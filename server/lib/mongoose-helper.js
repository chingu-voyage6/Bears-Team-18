const User = require('../mongoose/user');
const {
  NoUserFound,
  MissingUsernameOrPassword,
  InvalidUsernameOrPassword,
} = require('./errors');
const logger = require('../services/logger');
const { encryptPassword, compare } = require('../services/crypt');
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

mongooseHelper.verifyPassword = async (userDoc, password) => {
  try {
    await compare(userDoc, password);
  } catch (e) {
    throw e;
  }
};

mongooseHelper.createAdmin = async (username, password) => {
  let admin = new User({
    username: username,
    password: await encryptPassword(password),
    permission: 'admin',
  });
  await admin.save();
};

module.exports = mongooseHelper;
module.exports.checkUser = mongooseHelper.checkUser;
module.exports.verifyPassword = mongooseHelper.verifyPassword;
