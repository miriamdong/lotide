const assertEqual = require('./assertEqual');

const eqArrays = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const item1 = a[i];
    const item2 = b[i];
    if (typeof item1 !== typeof item2) return false;
    if (Array.isArray(item1) && Array.isArray(item2)) {
      // console.log(a[i], b[i]);
      // console.log('?' + eqArrays(a[i], b[i]));
      if (!eqArrays(item1, item2)) return false;
    } else if (item1 !== item2)
      return false;
  }
  return true;
};

module.exports = eqArrays;