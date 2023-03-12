// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(arr, from, to) {
  return arr.map((element) => (element === from ? to : element));
}
const fruits1 = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(fruits1, '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(arr, item) {
  let value = 0;
  arr.forEach((element) => element === item && value++);
  return value;
}
const fruits2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(count(fruits2, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
const fruits3 = ['🍌', '🥝', '🍇'];
const fruits4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(match(fruits3, fruits4));
