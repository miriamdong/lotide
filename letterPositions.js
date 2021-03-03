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
  (eqArrays(actual, expected)) ? console.log('passed') : console.log('failed');
};

const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === ' ') {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);

  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);