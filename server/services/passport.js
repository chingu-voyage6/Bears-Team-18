const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const User = require('../mongoose/user');

passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOne({ githubId: profile.id }).then(user => {
        if (user) {
          cb(null, user);
        } else {
          new User({
            displayName: profile._json.name,
            email: profile._json.email,
            githubId: profile._json.id,
            photoURL: profile._json.avatar_url,
            signUpComplete: false,
          })
            .save()
            .then(user => {
              cb(null, user);
            });
        }
      });
    }
  )
);
