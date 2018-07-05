const { join } = require('path');
const { gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const typeDefs = importSchema(join(__dirname, 'schema.graphql'));

module.exports = {
  typeDefs,
  resolvers,
};
