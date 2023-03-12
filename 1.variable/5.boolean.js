// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
// 참과 거짓을 담고 있는 변수는 is를 앞에 붙임
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();

// !붙이면 값을 boolean으로 변경 가능
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

/**
 * Boolean - MDN
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */
