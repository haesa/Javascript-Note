// return을 명시적으로 작성하지 않으면 자동으로 undefined이 반환됨!
function sum(a, b) {
  // return a + b;
  return undefined;
}

const result = sum(1, 2);
console.log(result);

// return후엔 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입 부분에서 함수를 일찍 종료함
function print(num) {
  if (num < 0) {
    return; // return undefined;의 약자, 함수 종료
  }
  console.log(num);
}

print(12);
print(-12);
