const UserModel = require('../../../mongoose/user');

module.exports = async function fetchUser(parentVal, { githubId }, context) {
  const user = await UserModel.findOne({ githubId });

  if (!user) {
    throw new Error('You are not signed in or your session has expired');
  }

  return user;
};
