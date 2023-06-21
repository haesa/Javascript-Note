// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 이제는 클로져 대신 클래스를 사용
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(`Class counter: ${this.#count}`);
  }
}

const counter = new Counter();
counter.increase();
