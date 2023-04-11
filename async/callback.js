//JavaScript is synchronous.
//Execute the code block in order after hoising.
//hoisting: var, function declaration
console.log('1');
setTimeout(()=> console.log('2'), 1000);
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));//arrow function

//Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {//2초 후 실행(Server)
            if(
                (id === 'uijung' && password === 'dream')||
                (id === 'corder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user,onSuccess, onError){
        setTimeout(()=> {
            if(user === 'uijung'){
                onSuccess({name: 'uijung', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id, 
    password, 
    (user) => {
        UserStorage.getRoles(
            user,
            (userWithRole)=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error =>{console.log(error)}
            );
    },
    (error) => {console.log(error)}
);