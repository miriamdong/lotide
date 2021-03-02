// FUNCTION IMPLEMENTATION
let e = String.fromCodePoint(0x1F603);
let f = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${e}${e}${e} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(input) {
  return input[0];
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), 'undefined');
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");