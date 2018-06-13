const {GraphQLObjectType, GraphQLString} = require("graphql");

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    username: {type: GraphQLString}
  }
})

module.exports = userType