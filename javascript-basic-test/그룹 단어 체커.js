let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      //앞 단어와 다를 때
      if (setData.has(data[i + 1])) {
        //이미 앞에 나온 단어라면
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

let N = Number(input[0]);

let cnt = 0;

for (let i = 1; i <= N; i++) {
  let data = input[i];
  if (check(data)) {
    cnt += 1;
  }
}
console.log(cnt);
