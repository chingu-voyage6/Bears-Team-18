const { findUsers } = require('../lib/mongoose-helper');
module.exports = {
  Query: {
    user: (parentVal, args, { user }) => {
      if (user) {
        return user;
      } else {
        throw new Error('You are not signed in or your session has expired');
      }
    },
    users: (parentVal, args, { user }) => {
      if (user.permission === 'admin') {
        return findUsers({});
      } else {
        throw new Error(
          'You are not an admin and this is an admin only function'
        );
      }
    },
  },
};
