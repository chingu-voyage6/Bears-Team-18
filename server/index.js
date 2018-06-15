const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const morgan = require('morgan');
const logger = require('./config/logger');
const typeDefs = require('./graphql/schema');

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

process.env.NODE_ENV === 'production'
  ? app.use(morgan('combined'))
  : app.use(morgan('dev'));

const schema = makeExecutableSchema({ typeDefs });

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/api/test', (req, res, next) => {
  logger.silly('test');
  logger.warn('test');
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});
