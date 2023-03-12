// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍉', '🍊', '🍑'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍊'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍊'));

// 추가 - 제일 뒤에
let length = fruits.push('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞에
length = fruits.unshift('🥝'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '🥝', '🍌');
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice();
console.log(newArr);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
// 인자를 주지 않으면 중첩된 배열은 1단계만 풀어줌
// 인자로 원하는 단계를 넘어주면 해당 단계만큼 중첩된 배열을 풀어줌
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
arr = arr.flat(3);
console.log(arr);

console.clear();

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정(업데이트)
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
