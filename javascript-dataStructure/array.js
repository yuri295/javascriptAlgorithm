//대괄호 사용하기

let arr1 = [];

arr.push(1);
arr.push(8);
arr.push(9);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Array() 사용하기
let arr2 = new Array();

//원하는 값을 직접 입력
let arr3 = [0, 1, 2, 3, 4, 5];

//하나의 값으로 초기화
let arr4 = Array.from({ length: 5 }, () => 7);

//2차원 배열
let arr5 = Array.from(Array(4), () => new Array(5));
