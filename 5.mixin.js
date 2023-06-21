// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러 개의 함수들을 상속하고 싶다!
// Mixin! => 여러 개의 객체를 다중 상속 가능

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog1 = new Dog('멍멍');

console.log(dog1);
dog1.play();
dog1.sleep();

// JS에서 클래스는 프로토타입을 기반으로 만들어진 Syntactic sugar이기 때문에 프로토타입을 활용한 Mixin이 가능!
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger1 = new Tiger('어흥!');
tiger1.play();
tiger1.sleep();
