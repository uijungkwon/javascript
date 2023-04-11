//1.string concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log('string literals:1+2=${1+2}');

//2.Numeric operators
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1*1);//multiply
console.log(1%1);//remainder
console.log(1**1);//exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

//4.Assignment operators
let x = 3;
let y = 6;
x += y; // x  = x+y;
x -=y;
x *=y;
x /=y;

//5.Comparsion operators

//6.Logical operators: || , &&, !
const value1 = false;
const value2 = 4<2;

//|| (or), finds the first truthy value

//7. Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive)

//object equality
const uijung1 = {name:'uijung'};
const uijung2 = {name:'uijung'};
const uijung3 = uijung1;
console.log(uijung1 == uijung2);//F
console.log(uijung1 === uijung2);//F
console.log(uijung1 == uijung3);//T

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false);//false, no boolean type

//8. Conditional operators: if

//9. ternary operator: ?
console.log(name === 'elli' ? 'yes' : 'no');

//10. Switch statement

//11. Loops - while
// do -while loop
//do {
    console.log()

//}while (i >0);

//for(let i = 3; i>0; i++){
// console.log(`inline variable for:`);  
//}

//nested loops

//break , continue
//Quiz
for(let i = 0; i<11; i++){
    if(i%2==0)//even
     console.log(i);
    else
     continue;
}

let i = 0;
while(true){
    if(i == 8){
     console.log(i);
     break;
    }
    else{
     console.log(i);
     i++;
    }
}
