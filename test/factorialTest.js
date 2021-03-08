const assert = require('chai').assert;
const factorial = require('../factorial');

describe('same', () => {

  it('should return same instance', () => {
    assert.strictEqual(factorial(5), 120, 'same');
  });
});