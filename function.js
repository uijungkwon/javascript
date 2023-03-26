//Function
//-fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function is object in JS
function log(message){
    console.log(message);
    return 0;
}
log('Hello@');

//2.Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3.
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');//no type

//4.Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello'; //local variable
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//6.Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

//7.Early return, early exit
//bad
function upgradeUser(user){
    if(user.point <=10)
    {
        return;
    }
    // long upgrade logic...
}

//First-class function
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

//1.Function expression
//a function declaration can be called earlier than it is defined.("hoisted")
//a function expression is created when the execution reaches it.
const print = function(){ // anonymous function<-> named function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;// function expression
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

//Arrow function
//always anonymous
const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();