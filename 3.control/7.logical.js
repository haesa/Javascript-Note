// 논리연산자 Logicaal operator
// && 그리고
// || 또는
// ! 부정(단항 연산자에서 온 것)
// !! 불리언값으로 변환 (단항 연산자 응용 버전)
let num = 7;
if (num >= 0 && num < 9) {
  console.log('👍');
}

if (num !== 8) {
  console.log('🙏');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.clear();
console.log(!!'text');
