// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// 필요하지 않으면 다시 원시 타입으로 변환

const number = 123; // number 원시 타입
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
console.log(number); // number의 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
