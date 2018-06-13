const {GraphQLSchema} = require("graphql");
const query = require('./root');

const Schema = new GraphQLSchema({
  query
});

module.exports = Schema