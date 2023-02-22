// 매개변수 있는 함수 호출
function power(x) {
  return x * x;
}
console.log(power(10));
console.log(power(20));
//함수 매개변수 초기화
function print(name, count = 1) {
  //매개변수 초기화
  if (typeof count == 'undefined') count = 1; //매개변수 초기화
  console.log(`${name}가  ${count}개 있습니다.`);
}
print('사과');
