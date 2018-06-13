const {GraphQLObjectType} = require("graphql");
const userType = require("./types/user-type");

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    User: {
      type: userType
    }
  }
});

module.exports = Root;