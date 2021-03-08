const assertEqual = require('./assertEqual');

const eqArrays = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== typeof b[i]) return false;
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      console.log(a[i], b[i]);
      console.log('?' + eqArrays(a[i], b[i]));
      eqArrays(a[i], b[i]);
    } else return a[i] === b[i] ? true : false;
  }
};



assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4]
]), true); // => true

assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4, 5]
]), false); // => false
assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3], 4
]), false); // => false