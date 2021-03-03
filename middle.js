// TEST/ASSERTION FUNCTIONS
const eqArrays = function(a, b) {
  let result;
  if (a.length = b.length) {
    for (let i = 0; i < a.length; i++) {
      result = a[i] === b[i] ? true : false;
    }
  }
  return result;
};

const assertArraysEqual = (actual, expected) => {
  (eqArrays(actual, expected)) ? console.log('passed'): console.log('failed');
};

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
  console.log(mid);
};

// TEST CODE
// ...

middle([1]); // => []
middle([1, 2]); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]