const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const typeDefs = require('./graphql/schema');

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

const schema = makeExecutableSchema({typeDefs});

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.use('/api/test', (req, res, next) => {
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});
