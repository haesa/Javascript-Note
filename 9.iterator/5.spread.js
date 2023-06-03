// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 객체는 내부 아이템을 꺼내 펼칠 수 있다 (spread)
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = add(...nums);
console.log(result);

// Rest parameter
function sum(...args) {
  return args.reduce((result, num) => result + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '🍍', ...fruits2];
console.log(arr);

// Object
const haesa = { name: 'haesa', age: 23, home: { address: 'home' } };
const updated = {
  ...haesa,
  job: 'developer',
};
console.log(haesa);
console.log(updated);
