let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;
let index = 0;

for (let j = 0; j < 9; j++) {
  let data = Number(input[j]);
  if (max < data) {
    max = data;
    index = j;
  }
}
console.log(max);
console.log(index + 1);
