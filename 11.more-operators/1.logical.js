// 논리연산자 Logical Operator
// && AND
// || OR
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'haesa' };
const obj3 = false;

if (obj1 || obj2) {
  console.log('둘다 true!');
}

// 단축 평가: 연산의 결과가 확정되면 굳이 나머지 피연산자를 true / false로 평가하지 않아도 된다.
// 평가는 생략하고 연산 결과를 확정짓는 피연산자(첫 falsy 또는 truthy에 해당하는 피연산자)를 반환
// 모든 피연산자를 평가했다면 마지막 피연산자를 반환(boolean으로 변환하지 않은 원래값)
let result = obj1 && obj2 && obj3;
console.log(result);

result = obj3 || obj2 || obj1;
console.log(result);

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falsy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없습니다.');
  }
  animal.owner = '바뀐 주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있습니다.');
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 것을 확인할 때
let item; // = { price: 1 };
console.log(item && item.price);

// 기본값을 설정
// default parameter는 인자를 전달하지 않거나, 값이 undefined일 때만 설정
// ||는 값이 falsy한 경우 설정: 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}

print();
print(undefined);
print(null);
print('');
print(0);
print(false);
