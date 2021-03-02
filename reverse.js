let input = process.argv.slice(2);
console.log('myArgs: ', input);

const reverse = function() {
  for (let i = 0; i < input.length; i++) {
    let result = '';
    for (let j = input[i].length - 1; j >= 0; j--) {
      result += input[i][j];
    }
    console.log(result);
  }
};
reverse();