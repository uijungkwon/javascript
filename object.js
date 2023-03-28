///objects
///one of the javaScript's data types.
///a collection of related data and/or functionality.
///nearly all objects in javaScript are instances of Object
///Object = {key: value};

//1. Literals and properties
const obj1 = {};//'object literal' syntax
const obj2 = new Object();//'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const uijung = {name:'uijung', age:24};//object
print(uijung);

//can add properties later
uijung.hasJob = true;
console.log(uijung.hasJob);

//can delete properties later
delete uijung.hasJob;
console.log(uijung.hasJob);

//2.Computed properties
//key should be always string
console.log(uijung.name);//use dot
console.log(uijung['name']);//use computed properties-> "string type"
uijung['hasJob']= true;
console.log(uijung.hasJob);

function printValue(obj,key){
    console.log(obj[key]);// use dot : error
}
printValue(uijung,'name');

//3. Property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('uijung', 24);

//4. constructor Function
console.log(person4);
function Person(name,age){
    //this = {};
        this.name = name;
        this.age = age;
    //return this;
}

//5. in operator: property existence check(key in obj)
console.log('name' in uijung);
console.log('nate' in uijung);

//6. for .. in vs for ..of
//for (key in obj)
console.clear();
for( key in uijung){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4];
for(value of array){
    console.log(value);
}

//7. Fun cloning
//object.assign([obj1, obj2, obj3...])
const user = {name:'uijung', age:24};
const user2  = user; //share same reference!
user2.name = 'corder';
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1={color: 'red'};
const fruit2={color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);