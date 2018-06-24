require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./graphql/resolvers');
const morgan = require('morgan');
const logger = require('./services/logger');
const typeDefs = require('./graphql/schema');
const passport = require('passport');
const authMiddleware = require('./services/auth-middleware');
const authRouter = require('./routes/auth');
require('./services/passport');
require('./services/db-service');

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

process.env.NODE_ENV === 'production'
  ? app.use(morgan('combined'))
  : app.use(morgan('dev'));

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(bodyParser.json());

app.use(passport.initialize());

app.use(authMiddleware);

app.use('/api/auth', authRouter);

app.use(
  '/api/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return { schema, context: { user: req.user } };
  })
);

app.use('/api/graphiql', graphiqlExpress({ endpointURL: '/api/graphql' }));

app.use('/api/test', (req, res, next) => {
  console.log(req.user);
  logger.silly('test');
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  logger.silly('Express Server Listening on Port 5000!');
});
