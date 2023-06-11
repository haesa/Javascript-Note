// var의 특징 (💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드의 가독성과 유지 보수성에 좋지 않음

// 1. 변수 선언 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려움
something = '💩';
console.log(something);

// 2. 중복 선언이 가능함
// 실수로 값을 덮어쓸 수 있음
var poop = '💩';
var poop = '🗑️';
console.log(poop);

// 3. 블록 레벨 스코프 없음
// 외부에서 내부 블록에 접근할 수 있어서 헷갈림
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원
function exmaple() {
  var dog = '🐶';
}
console.log(dog);
