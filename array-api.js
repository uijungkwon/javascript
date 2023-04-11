//Q1: make a string out of an array // array-> string
{const fruits = ['apple','banana','lemon' ];
const result = fruits.join(', ');
console.log(result);
}

//Q2: make an array out of a string
{
const fruits = '🍎,🍋,🍌,🍇,🍈';
const result = fruits.split(',',3);//seperator,limit
console.log(result);
}

//Q3: make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}
console.clear();
//Q4: make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);//splice(start,count)
    //result = array.splice(0,2);
    console.log(result);//index 2~4 
    console.log(array);
}
/*student class*/ 
class Student{
    constructor(name, age,enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
//array
const students =[
    new Student('A',29,true,45), //array 원소가 object
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
];

//Q5: find a student with the score 90
{   //find() : callback function , ~~until it finds one where predicate returns true
    //student == value
    const result =  students.find((student)=>student.score  === 90);
        //arrow function
    console.log(result);
}

//Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//Q7. make an array containing only the students' scores
//result should be: [45,80,90,66,88]
{   //map() : mapping
    const result = students.map((student)=> student.score);//return true
    console.log(result);
}

//Q8. check if there is a student with score lower than 50
{   
    console.clear();
    const result = students.some((student)=>student.score <50);
    console.log(result);

    // same result
    const result2 = !students.every((student) => student.score<50);
    console.log(result2);
}

console.clear();
//Q9. compute students' average score
{   //reduce() :The return value of the callback function is the accumulated result
    const result = students.reduce((prev,curr)=> prev + curr.score,0);
    console.log(result / students.length);
}

//Q10. make a string containing all the scores
//result should be: '45,80,90,66,88'
{
    const result = students
    .map(student => student.score)
    .filter(score =>score >= 50)//map(): new array return 
    .join();// make to string
    console.log(result);
}

//Bonus! do Q10 sorted in ascending order
//result should be: '45,66,80,88,90'
{
    const result = students.map(student=> student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(result);
}