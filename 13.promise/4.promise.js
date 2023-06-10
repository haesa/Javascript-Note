function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds === undefined || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('안녕'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
