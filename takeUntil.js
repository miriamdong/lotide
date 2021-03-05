const takeUntil = (array, callback) => {
  let newArray = [];
  const arr = array.map(i => callback(i));
  // console.log(arr);
  // console.log(callback());
  let i = 0;
  while (i < array.length && arr[i] !== true) {
    // console.log(i, callback());
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);