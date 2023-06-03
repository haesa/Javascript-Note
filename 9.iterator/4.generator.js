// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let i = 0;
//     return {
//       next() {
//         return { done: i > max, value: i++ * 2 };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2;
  }
}

const multiple = multipleGenerator();
const next = multiple.next();
console.log(next.value, next.done);
