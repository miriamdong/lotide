const findKey = (obj, callback) => {
  for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    if (callback(obj[key])) {
      return key;
    }
  }
};


let e = String.fromCodePoint(0x1F603);
let f = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${e}${e}${e} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2), "noma");