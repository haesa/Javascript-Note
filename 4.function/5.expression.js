// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immedicately-Invoked Function Expressions)
// ()로 감싸면 값으로 변환됨, 즉 함수가 위치하는 메모리 주소의 값으로 바뀌면서 해당 함수 호출
(function run() {
  console.log('😋');
})();
