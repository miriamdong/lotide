// FUNCTION IMPLEMENTATION
let e = String.fromCodePoint(0x1F603);
let f = String.fromCodePoint(0x1F621);
const assertEqual = (actual, expected) => actual === expected ?
  console.log(`${ e }${ e }${ e } Assertion Passed: ${ actual } === ${ expected }`) :
  console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);

module.exports = assertEqual;