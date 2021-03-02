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

const tail = function(input) {
  return input.slice(1);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!