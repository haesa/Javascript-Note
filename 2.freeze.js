// 동결! Object.freeze => 프로퍼티 디스크립터 변경(writable: false, configurable: false)
// 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, Shallow freeze)
const haesa = { name: 'haesa' };
const cat = { name: '나비', emoji: '😺', owner: haesa };
Object.freeze(cat);
cat.name = '야옹';
console.log(cat);
cat.age = 2;
console.log(cat);
delete cat.name;
console.log(cat);

haesa.name = '나는 해사다';
console.log(cat);

// const des = Object.getOwnPropertyDescriptors(cat);
// console.log(des);

// 밀봉! Object.seal => 프로퍼티 디스크립터 변경(configurable: false)
// 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const dog = { ...cat };
Object.assign(dog, cat);
Object.seal(dog);
dog.name = '멍멍';
console.log(dog);
delete dog.emoji;
console.log(dog);

// const des = Object.getOwnPropertyDescriptors(dog);
// console.log(des);

console.log(Object.isFrozen(cat));
console.log(Object.isSealed(dog));

// 확장 금지 preventExtensions
// 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));

tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 4;
console.log(tiger);
