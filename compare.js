// Helper to return a value's internal object [[Class]]
// That this returns [object Type] even for primitives
// eslint-disable-next-line func-style
const getClass = obj => Object.prototype.toString.call(obj);


const assertEqual = (actual, expected) => actual === expected ?
  console.log(`Assertion Passed: ${ actual } === ${ expected }`) :
  console.log(`Assertion Failed: ${actual} !== ${expected}`);

/*
 ** @param a, b        - values (Object, RegExp, Date, etc.)
 ** @returns {boolean} - true if a and b are the object or same primitive value or
 **                      have the same properties with the same values
 */
// eslint-disable-next-line func-style
function eqObject(a, b) {

  // If a and b reference the same value, return true
  if (a === b) return true;

  // If a and b aren't the same type, return false
  if (typeof a !== typeof b) return false;

  // Already know types are the same, so if type is number and both NaN, return true
  if (typeof a === 'number' && isNaN(a) && isNaN(b)) return true;

  // Get internal [[Class]]
  let aClass = getClass(a);
  let bClass = getClass(b);

  // Return false if not same class
  if (aClass !== bClass) return false;

  // If they're Boolean, String or Number objects, check values
  if (aClass === '[object Boolean]' || aClass === '[object String]' || aClass === '[object Number]') {
    return a.valueOf() === b.valueOf();
  }

  // If they're RegExps, Dates or Error objects, check stringified values
  if (aClass === '[object RegExp]' || aClass === '[object Date]' || aClass === '[object Error]') {
    return a.toString() === b.toString();
  }

  // Otherwise they're Objects, Functions or Arrays or some kind of host object
  if (typeof a === 'object' || typeof a === 'function') {

    // For functions, check stringigied values are the same
    // Almost certainly false if a and b aren't trivial and are different functions
    if (aClass === '[object Function]' && a.toString() !== b.toString()) return false;

    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    // If they don't have the same number of keys, return false
    if (aKeys.length !== bKeys.length) return false;

    // Check they have the same keys
    if (!aKeys.every(key => b.hasOwnProperty(key))) return false;

    // Check key values - uses ES5 Object.keys
    return aKeys.every(key => eqObject(a[key], b[key]));
  }
  return false;
}

// prettier-ignore
assertEqual(eqObject({
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
assertEqual(eqObject({
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
assertEqual(eqObject({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: 1,
  b: 2
}), false);

assertEqual(eqObject([
  [2, 3],
  [4]
], [
  [2, 3],
  [4]
]), true); // => true

assertEqual(eqObject([
  [2, 3],
  [4]
], [
  [2, 3],
  [4, 5]
]), false); // => false
assertEqual(eqObject([
  [2, 3],
  [4]
], [
  [2, 3], 4
]), false); // => false