const crypt = {};
const { sign, verify } = require('jsonwebtoken');
const { hash, compare } = require('bcrypt');
const { InvalidUsernameOrPassword } = require('../lib/errors');
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

crypt.encryptPassword = async password => {
  try {
    return await crypt.asyncHash(password);
  } catch (e) {
    console.log(e);
  }
};

crypt.asyncHash = password => {
  const saltRounds = 10;
  return new Promise((resolve, reject) => {
    hash(password, saltRounds, (err, hash) => {
      err ? reject(err) : resolve(hash);
    });
  });
};

crypt.compare = async (userDoc, password) => {
  try {
    let compare = await crypt.asyncCompare(userDoc, password);
    if (compare) {
      return true;
    } else {
      throw new InvalidUsernameOrPassword();
    }
  } catch (e) {
    throw e;
  }
};
crypt.asyncCompare = (userDoc, password) => {
  return new Promise((resolve, reject) => {
    compare(password, userDoc.password, (err, check) => {
      if (err) {
        reject(err);
      } else if (check) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

module.exports = crypt;
module.exports.signUserToken = crypt.signUserToken;
module.exports.verifyUserToken = crypt.verifyUserToken;
module.exports.encryptPassword = crypt.encryptPassword;
