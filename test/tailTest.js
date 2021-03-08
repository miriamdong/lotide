const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);




describe("#tail", () => {
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });

  it("returns 'Labs' for result[1]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs');
  });
  it("returns 'Labs' for words.length", () => {
    assert.strictEqual(words.length, 3);
  });
});