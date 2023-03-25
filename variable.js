//1.Variable, rw(read/"write")
//let (added in ES6)
{
let name  = 'uijung';
console.log(name);
name = 'hello';
console.log(name);
}
//2. var hoisting(move declaration from bottom to top)
// has no block scope
{age = 4;
var age;}
//3.constant, r(read only)
//use const whenever possible
//only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;// integer
//Note!
//Immutable data types: premitive types, frozen objects
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistakes

// primitive=>single item: number, string, boolean, null,
// object=> box container
// function, first-class function


const size = 17.1// decimal number   -> type: number

let c = 12;
let b = 1.2;
                                //error
const infinity = 1/0;           // -> Infinity
const negativeinfinity =-1/0;   // -> -Infinity
const nAn = 'not a number' / 2; //->NaN

//string
const char  ='c';

//boolean
//false = 0,null, undefined
//true = any other value

//null
let nothing = null;

//undefined
let x = undefined; 

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); //not equal

//object, real-life object, data strecture
const ellie = {name: 'elli', age:20} //object

// 5. dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log('value: ${text}');
text = 1;
console.log('value: ${text}');
text = '7'+5;
text = '8'/'2'; //  Typescript!!
