const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: String,
  permission: String,
  signUpComplete: Boolean,
  displayName: String,
  profileIconUrl: String,
  email: String,
  location: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
