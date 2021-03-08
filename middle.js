const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  let mid = [];
  const l = array.length;
  // console.log('array.length:', l);
  const midIndex = Math.floor(l / 2);
  // console.log('midIndex:', midIndex);
  if (l <= 2) {
    mid;
  } else if (l % 2 === 0) {
    mid.push(array[midIndex - 1]);
    mid.push(array[midIndex]);
  } else {
    mid.push(array[midIndex]);
  }
  return mid;
};

module.exports = middle;