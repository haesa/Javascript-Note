function loop() {
  const array = [];
  // var와 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// let은 block scope이라서 for문마다 렉시컬 환경이 만들어지지만,
// var는 function scope이기 때문에 하나의 렉시컬 환경만을 갖는다. (=loop)
// 아래 코드와 같은 상황이다.
function loop2() {
  const array = [];
  var i;
  for (i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}
