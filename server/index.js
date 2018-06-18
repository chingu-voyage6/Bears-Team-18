const { config } = require('dotenv');
config();
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const morgan = require('morgan');
const mongoose = require('mongoose');
const logger = require('./services/logger');
const typeDefs = require('./graphql/schema');
const passport = require('passport');
const queryString = require('querystring');
const { signUserToken, verifyUserToken } = require('./services/crypt');
const User = require('./mongoose/user');
require('./services/passport');

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    logger.silly('Database Connected');
  })
  .catch(err => logger.error(`Database Error ${err}`));

const port = process.env.PORT ? process.env.PORT : 5000;

process.env.NODE_ENV === 'production'
  ? app.use(morgan('combined'))
  : app.use(morgan('dev'));

const schema = makeExecutableSchema({ typeDefs });

app.use(passport.initialize());

app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: 'user',
  })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  async (req, res) => {
    const token = await signUserToken(req.user.id);
    const query = queryString.stringify({
      token,
    });
    res.redirect('/path-to-component?' + query);
  }
);

app.use(async (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      let userId = await verifyUserToken(token);
      let user = await User.findById(userId);
      if (user) {
        req.user = user;
        next();
      } else {
        next();
      }
    } catch (e) {
      console.log(e);
      logger.error(e);
    }
  } else {
    next();
  }
});

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return { schema, context: { user: req.user } };
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/api/test', (req, res, next) => {
  console.log(req.user);
  logger.silly('test');
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  logger.silly('Express Server Listening on Port 5000!');
});
