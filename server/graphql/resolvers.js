const UserResolver = require('./user/resolvers');

module.exports = {
  Query: {
    getUser: UserResolver.getUser,
  },

  Mutation: {
    completeSignup: UserResolver.completeSignup,
  },
};
