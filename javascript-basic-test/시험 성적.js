let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0];

function check(line) {
  if (line >= 90 && line <= 100) {
    console.log('A');
  } else if (line >= 80 && line <= 89) {
    console.log('B');
  } else if (line >= 70 && line <= 79) {
    console.log('C');
  } else if (line >= 60 && line <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}

check(line);

//왜 풀었지....
