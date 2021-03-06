const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'userName is a required key in the user model'],
  },
  githubId: {
    type: String,
    required: [true, 'githubId is an *unique* required key in the user model'],
    unique: true,
  },
  status: {
    type: String,
    required: [true, 'signUpComplete is a required key in the user model'],
  },
  timeZone: {
    type: Object,
    required: [true, 'timeZone is a required key in user model'],
  },
  permission: {
    type: String,
    required: [true, 'permission is a required key in the user model'],
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  photoURL: String,
  chinguDetails: Object,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
