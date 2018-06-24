const { verifyUserToken } = require('../services/crypt');
const User = require('../mongoose/user');
const logger = require('../services/logger');

async function auth(req, res, next) {
  let token = req.headers.authorization;
  if (token) {
    try {
      let userId = await verifyUserToken(token);
      let user = await User.findById(userId);
      if (user) {
        req.user = user;
        next();
      } else {
        next();
      }
    } catch (e) {
      console.log(e);
      logger.error(e);
    }
  } else {
    next();
  }
}

module.exports = auth;
