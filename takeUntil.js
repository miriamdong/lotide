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


module.exports = takeUntil;