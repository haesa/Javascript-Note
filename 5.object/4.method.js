// 객체 안에서 자신의 속성에 접근하려면 this를 사용해야 함
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
