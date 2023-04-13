//async & await
//clear style of using promise!!

//1.async
async function fetchUser(){
    //do network request in 10 secs....
    return 'uijung';
    };//데이터가 준비되는대로 콜백함수를 불러줌

const user = fetchUser();
user.then(console.log);//then이란 콜백함수 호출
console.log(user);

//2. await
function  delay(ms){
    return new Promise(resolve=> setTimeout(resolve, ms));
}
async function  getApple(){
    await delay(2000);
    return '🍎';
}
async function  getBanana(){
    await delay(1000);
    return '🍌';
}
/*병렬 수행*/
async function  pickFruits(){
    const applePromise = getApple();// 바로 코드블록 실행
    const bananaPromise = getBanana();
    //병렬적으로 실행 가능함-> 1초만에 출력
    const apple =await applePromise;//만들자마자 get()함수에서 실행됨 
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}


/*function pickFruits(){
    return getApple()
    .then(apple => {
        getBanana()
        .then(banana=> `${apple} + ${banana}`);
    });
}*/


pickFruits().then(console.log);

//3.useful promise APIS
function pickAllFruits(){
    return  Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);//콘솔로그에 출력
// 
//위를 간단하게 생성, 모든 프로미스들이 병렬적으로
//받을때까지 

//첫번쨰 과일만 받아오고 싶을 때
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
//바나나를 먼저 출력해주고 그다음 다른 애들을 출력해주는 것을 알 수 있음
