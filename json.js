///JSON

//1.Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json =JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },// no.....
};

json = JSON.stringify(rabbit,['name', 'color','size']);
console.log(json);// use -> " "

json = JSON.stringify(rabbit,(key,value)=> {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'uijung' : value;
});
console.log(json);// use " "

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
//obj.jump();//error

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//birthDate : string