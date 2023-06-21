// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자옹!');
  }
}

const dog1 = new Dog('뭉치', '🐶');
dog1.play();
dog1.printName();

class Tiger extends Animal {
  hunt() {
    console.log('사냥하자! ..🐇..');
  }
}

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

// 어떤 프로토타입을 따르는지, 상속도를 확인하고 싶을 때 사용 (= instanceof)
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);

console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
