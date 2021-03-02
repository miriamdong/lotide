// FUNCTION IMPLEMENTATION
let e = String.fromCodePoint(0x1F603);
let f = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(e + e + e + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(f + f + f + " Assertion Failed: " + actual + " !== " + expected);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);