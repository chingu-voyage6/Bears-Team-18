const express = require('express');
const logger = require('../services/logger');
const User = require('../mongoose/user');
const { signUserToken } = require('../services/crypt');
const passport = require('passport');
const {
  checkUser,
  checkForUsernameAndPassword,
  verifyPassword,
} = require('../lib/mongoose-helper');
const {
  NoUserFound,
  MissingUsernameOrPassword,
  InvalidUsernameOrPassword,
} = require('../lib/errors');
const router = express.Router();

router.post('/admin/login', async (req, res) => {
  try {
    checkForUsernameAndPassword(req.body.username, req.body.password);
    let user = await checkUser({ username: req.body.username });
    await verifyPassword(user, req.body.password);
    let userToken = await signUserToken(user.id);
    res.json({ token: userToken }).status(200);
  } catch (e) {
    if (e instanceof MissingUsernameOrPassword) {
      res.json({ error: 'Username or password was not provided' }).status(400);
    } else if (e instanceof NoUserFound) {
      res.json({ error: 'Invalid username or password' }).status(400);
    } else if (e instanceof InvalidUsernameOrPassword)
      res.json({ error: 'Invalid username or password' }).status(400);
    else {
      res.status(500);
      logger.error(e);
    }
  }
});

router.get(
  '/github',
  passport.authenticate('github', {
    scope: 'user',
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github'),
  async (req, res) => {
    res.redirect(`http://localhost:3000/`);
  }
);

module.exports = router;
