// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달해야 합니다.');
  }
  if (seconds < 0) {
    throw new Error('seconds가 0보다 작습니다.');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('안녕');
  }, 3);
} catch (error) {
  console.log(error);
}
