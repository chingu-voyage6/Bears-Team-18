const UserModel = require('../../mongoose/user');

module.exports = {
  getUser: async (_, { githubId }) => {
    const user = await UserModel.findOne({ githubId });

    if (!user) {
      throw new Error('You are not signed in or your session has expired');
    }

    return user;
  },

  updateUser: (_, { input, githubId }) => {
    const { ...update } = input;

    return UserModel.findOneAndUpdate({ githubId }, update, { new: true });
  },
};
