
console.log(4-1); //사칙연산은 그냥 console에 log로 표시

var a=1;  // 변수는 자료형에 따라 구분하지 않고 그냥 다 var로 표시
console.log(a);
a=2;
console.log(a);

console.log(1=='1'); // true
console.log(1==='1'); // false -> ===는 자료형까지 같아야 true
// 이 원리는 != !== 에도 적용된다.


//줄바꿈 \n
var name='Jo Sue Yeon';
var str1='Hi' + '\nmy name is '+name;
console.log(str1);

//template literal: javascript에서 문자를 입력하는 방식
// ${}: 하나의 string안에 연결해서 사용, 줄바꿈가능
var str2='Hi my name is ${name}';
console.log(str2);
