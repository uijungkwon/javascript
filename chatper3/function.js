//익명함수 - 변수에 할당하여 사용
let fun = function () {
  console.log('함수의 첫번째 줄');
  console.log('함수의 두번째 줄');
};
fun();
console.log(fun);
//선언적 함수
function app() {
  console.log('함수의 첫번째 줄');
  console.log('함수의 두번째 줄');
}
app();
//화살표 함수 - 익명 코드는 화살표 함수로 대체 가능
let f = () => {
  console.log('함수의 첫번째 줄');
  console.log('함수의 두번째 줄');
};
f();
