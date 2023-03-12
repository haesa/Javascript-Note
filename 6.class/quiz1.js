// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  // getter setter는 arrow function에 적용 X, 왜??
  get value() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}
const counter = new Counter(0);
// console.log(counter);
counter.increment();
counter.increment();
console.log(counter.value);
