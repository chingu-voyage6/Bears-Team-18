const UserModel = require('../../mongoose/user');

module.exports = {
  getUser: async (_, { githubId }, { user }) => {
    if (!user) {
      throw new Error('You are not signed in or your session has expired');
    }

    return user;
  },

  updateUser: (_, { input }, { user }) => {
    if (!user) {
      throw new Error('You are not signed in or your session has expired');
    }

    return UserModel.findOneAndUpdate(user.githubId, input, { new: true });
  },
};
