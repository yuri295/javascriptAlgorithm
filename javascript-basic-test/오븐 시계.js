let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let s = a * 60 + b + c;
s %= 1440;
let hour = parseInt(s / 60);
let minute = s % 60;
console.log(hour + ' ' + minute);
