// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 나중에 호출된다.
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(1, 2, multiply);
// 함수 레퍼런스만 전달받고 필요한 순간에 호출되기 때문에 언제 호출될지 알 수 없다. 이것을 콜백함수라 부른다. (돌아와서 나중에 호출한다는 의미)
