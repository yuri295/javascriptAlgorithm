let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let i = 1; i < N + 1; i++) {
  let data = input[i].split(' ').map(Number);
  let n = data[0];
  let avg = 0;
  for (let j = 1; j < n + 1; j++) {
    avg += data[j];
  }
  avg = avg / n;
  let cnt = 0;
  for (let s = 1; s < n + 1; s++) {
    if (data[s] > avg) {
      cnt += 1;
    }
  }
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
