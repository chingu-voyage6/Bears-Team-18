const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: String,
  displayName: String,
  profileIconUrl: String,
  email: String,
  location: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
