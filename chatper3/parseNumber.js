/*자바스크립트의 내장 함수 */
// 타이머 함수
setTimeout(function () {
  console.log('1초가 지났습니다');
}, 1000); //1000밀리초

setInterval(function () {
  console.log('1초마다 호출됩니다.');
}, 1000);

/*clearInterval함수*/
let id = setInterval(function () {
  //함수를 변수로 저장
  console.log('출력합니다');
}, 1000);
setTimeout(function () {
  clearInterval(id);
}, 3000);
