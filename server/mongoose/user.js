const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, 'email is a required key in the user model'],
  },
  email: {
    type: String,
    required: [true, 'email is an *unique* required key in the user model'],
    unique: true,
    lowercase: true,
  },
  githubId: {
    type: String,
    required: [true, 'email is an *unique* required key in the user model'],
    unique: true,
  },
  signUpComplete: {
    type: Boolean,
    required: [true, 'email is a required key in the user model'],
  },

  photoURL: String,
  chinguDetails: Object,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
