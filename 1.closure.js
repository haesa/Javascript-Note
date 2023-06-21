// 클로져: 함수가 중첩됐을 때 내부 함수가 외부 함수의 렉시컬 환경에 접근 가능한 것
function outer() {
  const x = 0;
  function inner() {
    console.log(`inner function x: ${x}`);
  }
  return inner;
}

const inner = outer();
inner();
