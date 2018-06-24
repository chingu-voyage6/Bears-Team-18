class NoUserFound extends Error {
  constructor() {
    super();
    this.message = 'No User Found';
  }
}
class MissingUsernameOrPassword extends Error {
  constructor() {
    super('Username or password was not provided');
  }
}

class InvalidUsernameOrPassword extends Error {
  constructor() {
    super();
    this.message = 'Invalid username or password';
  }
}

module.exports.NoUserFound = NoUserFound;
module.exports.MissingUsernameOrPassword = MissingUsernameOrPassword;
module.exports.InvalidUsernameOrPassword = InvalidUsernameOrPassword;
