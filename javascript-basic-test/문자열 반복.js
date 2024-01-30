let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [R, S] = input[i].split(' ');
  let newData = '';
  for (let j = 0; j <= S.length; j++) {
    newData += S.charAt(j).repeat(R); //repeat으로 문자열 반복
  }
  console.log(newData);
}
