const input = [{
    x: 3,
    y: 4
  },
  {
    x: 12,
    y: 5
  },
  {
    x: 8,
    y: 15
  }
];
const pythagorean = input.map(x => {
  let arr = Object.values(x);
  return Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
});

module.exports = pythagorean;

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);