const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;
const User = require('../mongoose/user');

passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/github/callback',
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOne({ githubId: profile.id }).then(user => {
        if (user) {
          cb(null, user);
        } else {
          new User({
            githubId: profile.id,
            displayName: profile.username,
            profileIconUrl: profile.avatar_url,
            email: profile.email,
            location: profile.location,
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
