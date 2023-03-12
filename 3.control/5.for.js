// 반복문 Loop Statement
// for(변순선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블륵 수행
// 3. 증감식 수행
// 4. 조건식 거짓이 될 때까지 2, 3번 반복

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 💣
// for (;;) {
//   console.log('😋');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('i가 드디어 10이 되었다.');
    continue;
    break;
  }
  console.log(i);
}
