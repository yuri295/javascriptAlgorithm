let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sum = 0;

for (let i = 1; i < n + 1; i++) {
  sum += i;
}
console.log(sum);
