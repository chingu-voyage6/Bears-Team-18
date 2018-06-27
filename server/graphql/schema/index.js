const { gql } = require('apollo-server');

const types = require('./types');
const resolvers = require('../resolvers');

const schema = gql`
  type Query {
    getUser(githubId: String!): User!
  }

  type Mutation {
    updateUser(githubId: String!, input: UpdatedUser!): User!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = {
  typeDefs: [schema, ...types],
  resolvers,
};
