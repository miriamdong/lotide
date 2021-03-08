const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const result = {};
  for (const letter of str) {
    // console.log(letter);
    if (letter !== ' ') {
      result[letter] = +result[letter] ? result[letter] + 0 : 0;
      result[letter] += 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));