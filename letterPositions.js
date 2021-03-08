const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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


module.exports = letterPositions;