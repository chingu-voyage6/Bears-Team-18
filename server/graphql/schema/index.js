const types = require('./types');
const resolvers = require('../resolvers');

module.exports = {
  typeDefs: [...types],
  resolvers,
};
