// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기

function replace(arr, from, to) {
  return arr.map((element) => (element === from ? to : element));
}

// 퀴즈2: 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기

function count(arr, item) {
  return arr.filter((value) => value === item).length;
}

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환

function match(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

// 퀴즈4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result = nums //
  .filter((item) => item > 5) // [16, 25, 34, 21]
  .reduce((sum, value, _, array) => (sum += value / array.length), 0); // 사용하지 않는 인자는 _
console.log(result);
