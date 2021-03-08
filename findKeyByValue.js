const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, search) {
  for (const key in obj) {
    // console.log(key);
    if (obj[key] === search) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  good: "good movie",
  bad: "not good"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "not good"), "bad");