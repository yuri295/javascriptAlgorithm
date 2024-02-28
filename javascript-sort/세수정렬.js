let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let array = input[0].split(' ').map(Number);

array.sort(function (a, b) {
  return a - b;
});

let answer = '';
for (let i = 0; i < array.length; i++) {
  answer += array[i] + ' ';
}
console.log(answer);
