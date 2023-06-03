// Iterable 하다는 건 순회가 가능하다는 것!
// [Symbol.iterator](): Iterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴하면 순회 가능한 객체임
// 순회가 가능하면 무엇을 할 수 있는가? for..of, spread

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

// Iterator가 아닌 객체는 for..of 대신에 for..in 연산자 사용 가능
const obj = { name: 'haesa', age: 23 };
for (const item in obj) {
  // key를 출력
  console.log(item);
}

const iterotor = array.values();
while (true) {
  const { done, value } = iterotor.next();
  if (done) break;
  console.log(value);
}
