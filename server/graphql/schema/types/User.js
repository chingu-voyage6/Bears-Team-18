const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    displayName: String!
    email: String!
    githubId: String!
    signUpComplete: Boolean!

    photoURL: String
  }

  type Query {
    user(githubId: String!): User
  }
`;
