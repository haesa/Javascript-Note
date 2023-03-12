// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지
// ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2));

// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1;
console.log(text);

console.clear();

const string = '123';
const number = 123;
const test = string + number;
console.log(typeof test);
