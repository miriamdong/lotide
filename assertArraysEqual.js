const eqArrays = function(a, b) {
  let result;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      // console.log(a[i], b[i]);
      result = a[i] === b[i] ? true : false;
    }
  }
  return result;
};

const assertArraysEqual = (actual, expected) => {
  (eqArrays(actual, expected)) ? console.log(`Assertion Passed: ${actual} === ${expected}`): console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 4, 5]);