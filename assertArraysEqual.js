const eqArrays = function(a, b) {
  let result;
  // eslint-disable-next-line no-cond-assign
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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 4, 5]);