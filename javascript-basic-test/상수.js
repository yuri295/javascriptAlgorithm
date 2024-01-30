let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let r = input[0].split(' ')[0];
let s = input[0].split(' ')[1];

let r_1 = r[2] + r[1] + r[0];
let s_1 = s[2] + s[1] + s[0];

console.log(Math.max(Number(r_1), Number(s_1)));
