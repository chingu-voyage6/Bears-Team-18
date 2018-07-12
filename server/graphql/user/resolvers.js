module.exports = {
  getUser: (_, { githubId }, { user, models: { User } }) => {
    if (githubId) {
      return User.findOne({ githubId });
    } else if (!githubId && user) {
      return user;
    } else {
      throw new Error('You are not signed in');
    }
  },
  completeSignup: (
    _,
    {
      input: {
        email,
        timeZone: { value, label, daylight },
      },
    },
    { user, lib: { validator } }
  ) => {
    if (user) {
      if (validator.email(email) && validator.timeZone(value, daylight)) {
        user.email = email;
        user.timeZone = { value, label, daylight };
        user.status = 'PROFILE_INCOMPLETE';
        return user.save();
      } else {
        throw new Error('Invalid email or time zone');
      }
    } else {
      throw new Error('User not signed in');
    }
  },
};
