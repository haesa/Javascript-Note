const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 앞에서부터 처음으로 찾는 문자의 인덱스를 반환
console.log(text.indexOf('l'));
// 뒤에서부터 처음으로 찾는 문자의 인덱스를 반환
console.log(text.lastIndexOf('l'));

// 특정 문자열이 포함되는지 확인
console.log(text.includes('H'));
console.log(text.includes('tx'));
console.log(text.includes('h'));

// 해당 문자열로 시작되는지 확인
console.log(text.startsWith('Hel'));
// 해당 문자열로 끝나는지 확인
console.log(text.endsWith('orld!'));

// 대문자로 변환
console.log(text.toUpperCase());
// 소문자로 변환
console.log(text.toLowerCase());

// 첫 번째 인덱스부터 두 번째 인덱스 전까지 문자열 자르기
// 인덱스로 문자열 자르는 것은 동일

// substring vs slice 차이점
// start > end일 경우
// substring은 start와 end를 바꾸어 처리
// slice는 비어있는 string ''을 반환

// 인덱스가 음수일 경우
// substring은 0으로 취급
// slice는 뒤에서부터 인덱스의 절댓값만큼의 위치로 계산
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2)); // 뒤에서부터 인덱스에 있는 위치를 슬라이스

const space = '          space        ';
console.log(space.trim());

// 구분자를 기준으로 토큰을 잘라 배열 반환
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));
