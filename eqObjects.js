// eslint-disable-next-line no-unused-vars
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      return a[i] === b[i] ? true : false;
    }
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log(object1[key], object2[key]);
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const ab = {
//   a: "1",
//   b: "2"
// };
// const ba = {
//   b: "2",
//   a: "1"
// };

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
eqObjects(cd, dc); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
eqObjects(cd, cd2); // => false


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);