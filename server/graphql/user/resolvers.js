module.exports = {
  getUser: (_, { githubId }, { user, models: { User } }) => {
    if (githubId) {
      return User.findOne({ githubId });
    } else if (!githubId && user) {
      return user;
    } else {
      throw new Error('You are not signed in');
    }
  },
};
