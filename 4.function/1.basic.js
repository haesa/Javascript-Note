function sum(a, b) {
  console.log('function');
  return a + b;
}

const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}🖐`;
}

let lastNAme = '김';
let firstName = '지수';
console.log(fullName(firstName, lastNAme));

lastNAme = '박';
firstName = '철수';
console.log(fullName(firstName, lastNAme));
