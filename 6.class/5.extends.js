class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  eat() {
    super.eat();
    console.log('강아지가 먹는다!');
  }
  play() {
    console.log('놀자~');
  }
}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog('빨강이', '해사');
console.log(dog);
dog.play();
dog.eat();
