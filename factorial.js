const assert = require('assert');


const factorial = n => {
  // base case:
  if (n <= 1) return 1;
  // recursive case:
  else return n * factorial(n - 1);
};

// console.log(factorial(5));

module.exports = factorial;