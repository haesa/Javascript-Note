// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple', // 문자
  'hello-bye': '🖐', // 문자열
  0: 1, // 숫자
  ['hello-bye1']: '🖐', // 대괄호 안 문자열
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['name']);
console.log(apple['hello-bye']);
console.log(apple['0']);
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation => 키를 따옴표로 감싸서 문자열로 만들어야 함

// console.log(apple[name]); ❌
// console.log(apple[hello-bye]); ❌
// console.log(apple[0]);
// console.log(apple[hello-bye1]); ❌

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
