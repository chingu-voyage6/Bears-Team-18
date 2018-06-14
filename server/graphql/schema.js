module.exports = `  
type ToDo { 
  _id: ID!
  item: String!
 }
type Query { 
  todos: [ToDo]
  todo(_id: ID!): ToDo
}
type Mutation {
  addToDo(item: String!) : ToDo
}`