const validator = {};

validator.email = email => {
  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailCheck.test(email)) {
    return true;
  } else {
    return false;
  }
};

validator.timeZone = (value, daylight) => {
  function valueCheck(value) {
    if (value > -13 && value < 13) {
      return true;
    } else return false;
  }
  function daylightCheck(daylight) {
    if (typeof daylight === 'boolean') {
      return true;
    } else {
      return false;
    }
  }

  if (valueCheck(value) && daylightCheck(daylight)) {
    return true;
  } else {
    return false;
  }
};

module.exports = validator;
