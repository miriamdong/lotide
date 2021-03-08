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
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    console.log('Num: ' + obj1 + obj2);
    if (obj1 === obj2) return true;
  }
  if (typeof obj1 === 'object' && !Array.isArray(obj1) && typeof obj2 === 'object' && !Array.isArray(obj2)) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    // let values1 = Object.values(obj1);
    // let values2 = Object.values(obj2);
    // console.log(keys1, values1);
    // console.log(keys2, values2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      let value1 = obj1[key];
      let value2 = obj2[key];
      console.log(value1);
      console.log(value2);
      console.log(eqObjects(obj1[key], obj2[key]));
      if (!keys2.includes[key] || !eqObjects(value1, value2)) return false;
      // if (Object.entries(obj1).toString() === Object.entries(obj2).toString()) return true;
    }
  }
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