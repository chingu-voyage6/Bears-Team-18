const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const User = require('../mongoose/user');
passport.serializeUser((user, done) => {
  done(null, user.githubId);
});

passport.deserializeUser((githubId, done) => {
  User.findOne({ githubId }).then(user => {
    done(null, user);
  });
});
passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ githubId: profile.id }).then(user => {
        if (user) {
          return done(null, user);
        } else {
          new User({
            displayName: profile._json.name,
            githubId: profile._json.id,
            photoURL: profile._json.avatar_url,
            permission: 'user',
            signUpComplete: false,
          })
            .save()
            .then(user => {
              return done(null, user);
            });
        }
      });
    }
  )
);
