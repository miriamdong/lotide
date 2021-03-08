const e = String.fromCodePoint(0x1F603);
const f = String.fromCodePoint(0x1F621);
const assertEqual = (actual, expected) => actual === expected ?
  console.log(`${e}${e}${e} Assertion Passed: ${actual} === ${expected}`) :
  console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);

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