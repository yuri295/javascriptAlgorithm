let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = Number(input[0].split(' ')[0]);
let min = Number(input[1].split(' ')[1]);

function alarm(t, m) {
  if (m < 45) {
    t -= 1;
    m += 15;
    if (t < 0) {
      t = 23;
    }
  } else {
    m -= 45;
  }
  console.log(t + ' ' + m);
}

alarm(time, min);
