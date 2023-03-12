// static 정적 프로퍼티, 메소드
class Fruit {
  static MAX_FRUIT = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메소드
  static makeRandomFruit() {
    // 클래스 레벨에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
  // 멤버 함수는 생성자에서 설정❌
  // 인스턴스 레벨의 메소드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orangesms Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);

Math.pow();
Number.isFinite(1);
