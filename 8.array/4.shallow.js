// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// 객체 자체가 복사되는게 아니라 객체의 주소가 복사됨.
// 따라서 객체의 변경사항이 다른 복사본에도 똑같이 반영됨.
const pizza = { name: '🍕', pirice: 2, owner: { name: 'Haesa' } };
const ramen = { name: '🍜', pirice: 3 };
const sushi = { name: '🍣', pirice: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1); // 새로운 배열 생성
console.log('store1:', store1);
console.log('store2:', store2);

store2.push(sushi);
console.log('store1:', store1);
console.log('store2:', store2);

pizza.price = 4;
console.log('store1:', store1);
console.log('store2:', store2);

const haesa = { name: 'haesa', age: 20 };
const bada = { name: 'bada', pirice: 31 };
const gildong = { name: 'gildong', pirice: 15 };

const pair1 = [haesa, bada];
const pair2 = Array.from(pair1); // 새로운 배열 생성
// console.log(pair1);
// console.log(pair2);

// pair2.push(gildong);
// console.log(pair1);
// console.log(pair2);

haesa.age = 22;
console.log(pair1);
console.log(pair2);
