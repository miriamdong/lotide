const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

// eslint-disable-next-line func-style
function eqObjects(obj1, obj2) {
  if (typeof obj1 !== 'object' && obj1 === obj2) return true;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {

    if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key])) {

      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;

    return true;
  }
}

module.exports = eqObjects;