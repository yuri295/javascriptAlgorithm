let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let data = input[1];

let hap = 0;
for (let i of data) {
  hap += Number(i);
}

console.log(hap);
