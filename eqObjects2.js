const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  let result;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      result = a[i] === b[i] ? true : false;
    }
  }
  return result;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// eslint-disable-next-line func-style
function eqObjects(obj1, obj2) {
  console.log(obj1, obj2);
  if (typeof obj1 !== 'object' && obj1 === obj2) return true;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let values1 = Object.values(obj1);
  let values2 = Object.values(obj2);
  if (keys1.length !== keys2.length) return false;
  if (values1.length !== values2.length) return false;
  for (let i = 0; i < keys1.length; i++) {

    if (typeof keys1[i] === 'object' && !Array.isArray(keys1[i])) {
      console.log('key: ' + keys1[i], keys2[i]);
      return eqObjects(keys1[i], keys2[i]);
    } else if (keys1[i] !== keys2[i]) return false;

    if (typeof values1[i] === 'object' && !Array.isArray(values1[i])) {
      console.log('value: ' + values1[i], values2[i]);
      return eqObjects(values1[i], values2[i]);
    } else if (values1[i] !== values2[i]) return false;
  }
  return true;
}

// for (let key1 in object1) {
//   console.log(key1);
//   for (let key2 in obj2) {
//     console.log(key2);
//     if (Array.isArray(key1) && Array.isArray(key2)) {
//       console.log('key1: ' + key1, 'key2: ' + key2);
//       return eqArrays(key1, key2);
//     } if (Array.isArray(object1(key1)) && Array.isArray(object2(key2))) {
//       return eqArrays(obj1[key1], obj2[key2]);
//     }
//     if (!Array.isArray(object1(key1) && !Array.isArray(object2(key2)) {
//       eqObjects(obj1[key1], obj2[key2]);
//     }
//   }
// }

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

// const cd = {
//   c: "1",
//   d: ["2", 3]
// };
// const dc = {
//   d: ["2", 3],
//   c: "1"
// };
// eqObjects(cd, dc); // => true

// const cd2 = {
//   c: "1",
//   d: ["2", 3, 4]
// };
// eqObjects(cd, cd2); // => false

// prettier-ignore
assertEqual(eqObjects({
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
assertEqual(eqObjects({
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
assertEqual(eqObjects({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: 1,
  b: 2
}), false);