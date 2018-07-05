const UserResolver = require('./user/resolvers');

module.exports = {
  Query: {
    getUser: UserResolver.getUser,
  },
};
