let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let avg = 0;
let data = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  avg += data[i];
}
avg = avg / N;
let max = data.reduce((a, b) => Math.max(a, b));

console.log((avg / max) * 100);

//easy~
