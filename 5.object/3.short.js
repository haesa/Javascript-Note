const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y };
console.log(coordinate);

// 매개변수를 객체의 키 이름과 똑같이 하면 객체를 축약해서 작성할 수 있음
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
