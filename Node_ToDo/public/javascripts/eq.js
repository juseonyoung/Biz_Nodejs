console.log("=====================================");
console.log("JS에서 eq 비교연산자");

/*
    js에서 같은 값 비교할 때 사용하는 연산자가 2개있음
        동등 연산자 :==,
        평등 연산자 :===
*/

let b = 0 == "";
console.log("0=='' ", b);
b = 0 === "";
console.log("0 === '' :", b);

// js에서는 false인 경우가 몇가지 있는데
// 비교연산자, 관계연산자와 연결했을 때 false이면 순차적으로 뒤로
// 밀려나면서 비교! 자바스크립트에서만 있는 특이한 연산
b = "" || null || undefined || NaN || 0 || "없음";
console.log(b);

// 어떤(변수에 저장된) 값을 비교하여 정확히 일치하는 지 알고싶을 때는
// 동등연산자가 아닌 평등연산자를 사용하는 것이 정확하다
// 문자열 "1"을 숫자형으로 또는 숫자1을 문자열형 "1"로 자동형변환하여
// 비교해 버린다 그래서 true나옴
b = "1" == 1;
console.log(b); //엥 왜 true;;

// 정확한 비교가 필요할 때는 평등연산자
b = "1" === 1;
console.log(b);

b = null == undefined; //t
console.log(b);
b = null === undefined; //f
console.log(b);

/*
    동등연산자는 값을 자동형변환하거나 내용물이 같은지만 비교
    평등연산자는 형(type)먼저 비교하고 다르면 false같으면 true

*/
console.log(0 == false);
console.log(0 === false);

let num = 0; //단락평가? 첫번째 값만으로 확실할때
if (num && ++num) {
  // num이 true 인지 본다
  // num은 false 이기때문에(0이니까) 뒤 문장을 볼 것도 없음
  // num++이 실행이안됨
}
console.log("num && ++num:", num);

if (num || ++num) {
  // num이 false인 것 확인 num =0은 false이다 1은 true
  // OR 조건이기때문에 ++num를 만나 num은 1이 됨 1은 참
}
console.log("num || ++num:", num);
