const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
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
