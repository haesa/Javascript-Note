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

// async 키워드가 붙은 함수는 Promise를 반환
// await은 프로미스를 반환하는 함수 앞에 붙임

// 아래 함수는 배열을 resolve하는 Promise를 만듦
// 따라서 fetchFruits를 호출하면 Promise가 반환됨
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
