// Map, 유일한 키, 값 중복 허용, 순서 상관 X
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key5'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', prie: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);

// 구조적으로는 큰 차이 없음
// 사용법에서 차이가 드러남
// 사용할 수 있는 함수(인터페이스)가 약간 다름
// 오브젝트는 키로 value에 바로 접근 가능하지만, map은 불가능
// map은 get 메소드를 사용해서 value를 가져와야 함
