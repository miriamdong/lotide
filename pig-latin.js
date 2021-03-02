let input = process.argv.slice(2);
console.log('myArgs: ', input);
const latin = function() {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let word = '';
    for (let j = 1; j < input[i].length; j++) {
      word += input[i][j];
    }
    word += input[i][0];
    word += 'ay';
    result += word + ' ';
  }
  console.log(result);
};
latin();