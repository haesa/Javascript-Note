// Symbol 심볼
// 유일한 키를 생성할 수 있음
// 이름이 같더라도 서로 다른 유일한 키를 만들 때 심볼 사용

const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심볼 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 심볼이 가지고 있는 문자열을 알고 싶다면, Symbol.keyFor
// 주의할 점: Global Registry에 보관된 것만 가능 (Symbol.for로 생성한 것만)
console.log(Symbol.keyFor(k2));
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);

// 동일한 이름에 서로 다른 심볼은 Symbol
// 동일한 이름에 동일한 심볼은 Symbol.for
