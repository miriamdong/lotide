const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;