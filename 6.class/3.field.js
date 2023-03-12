// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }

  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };

  get = () => {
    this.#display();
  };
}

const apple = new Fruit('apple', '🍎');
// apple.name = '오렌지'; // #field는 외부에서 접근 불가능
console.log(apple); // display만  보인다
apple.get();
// console.log(apple.#name); // 외부에서 접근 불가능
