const assertEqual = require('./assertEqual');
const eqArrays = function(a, b) {
  let result;
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      result = a[i] === b[i] ? true : false;
    }
  }
  return result;
};

module.exports = eqArrays;