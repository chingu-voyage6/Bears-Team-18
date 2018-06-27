const UserResolver = require('./user-resolver');

module.exports = {
  Query: {
    getUser: UserResolver.getUser,
  },

  Mutation: {
    updateUser: UserResolver.updateUser,
  },
};
