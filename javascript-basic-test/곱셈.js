let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line1 = input[0];
let line2 = input[1];

let a = line2[2];
let b = line2[1];
let c = line2[0];

console.log(Number(line1) * Number(a));
console.log(Number(line1) * Number(b));
console.log(Number(line1) * Number(c));
console.log(Number(line1) * Number(line2));
