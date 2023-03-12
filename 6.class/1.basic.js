// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 멤버 함수는 생성자에서 설정❌
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'haesa' };

// 객체를 만드는 방법 3가지
// 1. 객체 리터럴 사용
// 2. 클래스 사용
// 3. 생성자 함수 사용
