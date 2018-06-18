const crypt = {};
const { sign, verify } = require('jsonwebtoken');

crypt.signUserToken = userId => {
  let data = { id: userId };
  return new Promise((resolve, reject) => {
    sign(
      data,
      process.env.JWT_KEY,
      {
        expiresIn: '12h',
        audience: 'USER_AUTH',
        issuer: 'CHINGU_AUTH',
        subject: 'USER_INFO',
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

crypt.verifyUserToken = userToken => {
  return new Promise((resolve, reject) => {
    verify(
      userToken,
      process.env.JWT_KEY,
      {
        maxAge: '12h',
        audience: 'USER_AUTH',
        issuer: 'CHINGU_AUTH',
        subject: 'USER_INFO',
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token.id);
        }
      }
    );
  });
};

module.exports = crypt;
module.exports.signUserToken = crypt.signUserToken;
module.exports.verifyUserToken = crypt.verifyUserToken;
