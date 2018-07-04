process.env.REACT_ROUTE =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/schema');
const morgan = require('morgan');
const logger = require('./services/logger');
const passport = require('passport');
const authRouter = require('./routes/auth');
const cookieSession = require('cookie-session');
require('./services/passport');
require('./services/db-service');

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

process.env.NODE_ENV === 'production'
  ? app.use(morgan('combined'))
  : app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(
  cookieSession({
    name: 'session',
    maxAge: 1000 * 60 * 60 * 12,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user,
  }),
});

server.applyMiddleware({ app });

app.use('/api/test', (req, res, next) => {
  console.log(req.user);
  logger.silly('test');
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  logger.silly(`Express Server Listening on Port 5000!${server.graphqlPath}`);
});
