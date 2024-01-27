// 단순 문자열 출력
console.log('Hello World!');

result = 35;

// 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함(백틱 문자)
console.log(`정답은 ${result}입니다.`);

// 사칙 연산
a = 7;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

// 빠른 출력
let answer = '';

for (let i = 1; i <= 100; i++) {
  answer += i + '/n';
}

console.log(answer);

// -fs 모듈
// fs를 이용해 파일 전체를 읽어 들여 처리
/*
    let fs = require('fs');
    let input = fs.readFileSync('input.txt').toString().split('\n');
    
    console.log(input);
*/

// readline 모듈
// 한 줄씩 입력받아서, 처리하여 정답 출력
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function () {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
});

//조건문

//for 반복문

//while 반복문

//Number와 String 형태 변환
let a = '777';
let b = Number(a); //a가 숫자이고 문자로 바꿀 땐 String(a)
console.log(b);

/**
 * Array.prototype.reduce()
 * 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용
 *
 * reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환
 * reducer의 형태: (accumulator, currentValue) => (반환값)
 * 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당
 * 반환값은 그 이후의 원소에 대하여 accumulator에 저장
 */

let data = [5, 2, 9, 8, 4];

//minValue 구하기
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); //2

//원소의 합계 구하기
let summary = data.reduce((a, b) => a + b);
console.log(summary); //28

//배열 초기화
// 직접 값을 설정하여 초기화
let arr1 = [8, 1, 4, 5, 6];

//길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr2 = new Array(5).fill(0);

//집합 자료형
//특정 원소의 등장 여부를 파악할 때 효과적으로 사용
let mySet = new Set(); //집합 객체 생성

//여러 개의 원소 삽입
mySet.add(3);
mySet.add(4);
mySet.add(5);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

//원소 5 제거
mySet.delete(5);

//원소를 하나씩 출력
for (let item of mySet) console.log(item);

//소수점 아래 특정 자리에서 반올림
//toFixed()
let x = 123.456;
console.log(x.toFixed(2));

/**
 * 이스케이프 시퀀스
 * 1. \t : 탭
 * 2. \\ : 역 슬래시
 * 3. \" : 큰 따옴표
 * 4. \' : 작은 따옴표
 */
