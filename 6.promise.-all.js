function getBanana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🍌'), 1000);
  });
}

function getApple() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🍎'), 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('오렌지가 없습니다.'));
}

// 바나나와 사과를 같이 가져오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all: 모든 Promise를 병렬적으로 한 번에 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

//Promise.race: 주어진 Promise 중에 제일 빨리 수행된 것 반환
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settled', fruits))
  .catch(console.log);
