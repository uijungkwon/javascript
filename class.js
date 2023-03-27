//Object-oriendted programming
//class: template
//object: instance of a class
//javascript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance

//1.Class declarations
class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}
const uijung = new Person('uijung', 20);
console.log(uijung.name);
console.log(uijung.age);
uijung.speak();

//2.Getter and Setters
class user{
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        this._age = value<0 ? 0 : value;
    }
}
const user1 = new user('steve','Job', -1);
console.log(user1.age);

//3.Fields (public, private)
//Too soon!
class experiment{
    publicField = 2;
    #privateField = 0;
}
const Experiment = new experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4.static properties and methods
//Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(aricleNumber){
        this.articleNumber = this.articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);

    }
    getArea(){
        return width*this.height;
    }
}
class Rectangle extends Shape{
    draw(){
        super.draw();
        console.log(`baby ${this.color} color of`);
    }
}
const rect = new Rectangle(20,20,'blue');
rect.draw();

///6 class checking: instance of
console.log(rect instanceof Rectangle);//T
console.log(rect instanceof Shape);//T
console.log(rect instanceof Object);//T