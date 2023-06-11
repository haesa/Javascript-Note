// 함수의 호이스팅은 함수 선언 전에 호출이 가능하게 해줌
print();
function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = 'hi';
let func1 = function () {};

// const cat = new Cat();
class Cat {}

// 함수는 선언 전체가 호이스팅
// 변수, 클래스는 선언까지만 호이스팅, 초기화는 원래 코드 위치에서 수행
// 초기화랑 할당은 다름

// let x = 1;
{
  console.log(x);
  let x = 2;
}
