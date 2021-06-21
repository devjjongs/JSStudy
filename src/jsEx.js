//숫자를 입력
const rawInput = prompt('cm 단위의 숫자를 입력해주세요');

//입력을 숫자로 변경하고 cm 단위로 변경
const cm = Number(rawInput);
//String, Number, Boolean
const inch = cm * 0.393701;
//inch = inch + 5;
//출력
alert(cm+'cm는 ' +inch +'inch입니다.');
