//콜백함수 사용- 함수를 함수의 매개변수로 전달
function callTenTimes(callback) {
  //10회 반복
  for (let i = 0; i < 10; i++) {
    callback();
  }
}
//변수 선언
callTenTimes(function () {
  console.log('함수 호출');
});
