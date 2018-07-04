const { gql } = require('apollo-server');

const types = require('./types');
const resolvers = require('../resolvers');

const schema = gql`
  type Query {
    getUser: User!
    getApplicants(numberPerPage: Int!, pageRequested: Int!): [User]
    sortApplicants(
      sortMethod: String!
      numberPerPage: Int!
      pageRequested: Int!
    ): [User]
  }

  type Mutation {
    # General update the does not toggle signupComplete bool. User wil be injected
    updateUser(input: UpdatedUserInput!): User!
    # called once preferences are set and changes the signupComplete boll. Should return error if signupComplete = true
    completeSignup(input: UpdatedUserInput!): User!
    createVoyageApplicantsList(voyageName: String!): VoyageApplicants!
    addApplicantToVoyage: Operation!
    # need a piece of unique information since this is an admin function on other users
    removeApplicantFromVoyage(githubId: String!): Operation!
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
