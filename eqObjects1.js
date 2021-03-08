const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// eslint-disable-next-line func-style
function eqObjects1(obj1, obj2) {
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    if (obj1 === obj2) return true;
  }
  if (typeof obj1 === 'object' && !Array.isArray(obj1) && typeof obj2 === 'object' && !Array.isArray(obj2)) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      let value1 = obj1[key];
      let value2 = obj2[key];
      console.log(eqObjects1(obj1[key], obj2[key]));
      if (!keys2.includes[key] || !eqObjects1(value1, value2)) return false;
      // if (Object.entries(obj1).toString() === Object.entries(obj2).toString()) return true;
    }
  }
}

module.exports = eqObjects1;