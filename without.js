const eqArrays = function(a, b) {
  let result;
  if (a.length = b.length) {
    for (let i = 0; i < a.length; i++) {
      result = a[i] === b[i] ? true : false;
    }
  }
  return result;
};

const without = function(source, itemsToRemove) {
  let arr = source.slice();
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arr[i] === itemsToRemove[j]) {
        arr.splice(i, 1);
      }
    }
  }
  console.log(arr);
  // console.log(source);
};


const assertArraysEqual = (actual, expected) => {
  (eqArrays(actual, expected)) ? console.log('passed'): console.log('failed');
};


without([1, 2, 3], [1]); // => [2, 3]
without([1, "2", "3"], [1, 2, "3", "4"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);