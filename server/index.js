const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require('./graphql/schema')
const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;
const mode = process.env.NODE_ENV ? process.env.NODE_ENV : "development"
const graphiql = mode === "development" ? true : false 

app.use('/graphql', expressGraphQL({
  schema,
  graphiql
}));

app.use('/api/test', (req, res, next) => {
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  console.log("Express Server Listening on Port 5000!");
});
