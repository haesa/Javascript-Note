// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = `'안녕!'`;
console.log(string);

string = '안녕!\n해사야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) `${}`
let id = 'haesa';
let greetings = `'안녕!, ${id}🖐\n즐거운 하루 보내요!'`;
console.log(greetings);

/**
 * 이스케이프 - MDN
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
 */
