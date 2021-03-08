const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for 1", () => {
    assert.strictEqual(eqObjects({
      a: {
        z: 1
      },
      b: 2
    }, {
      a: {
        z: 1
      },
      b: 2
    }), true);
  });
  it("returns false for 2", () => {
    assert.strictEqual(eqObjects({
      a: {
        y: 0,
        z: 1
      },
      b: 2
    }, {
      a: {
        z: 1
      },
      b: 2
    }), false);
  });

  it("returns false for 3", () => {
    assert.strictEqual(eqObjects({
      a: {
        y: 0,
        z: 1
      },
      b: 2
    }, {
      a: 1,
      b: 2
    }), false);
  });
});