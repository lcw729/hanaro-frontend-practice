function registerUser(name: string, age: number) {
    const id = 100;
    return {id, name, age};
}

type RegisterUser = Parameters<typeof registerUser>;

const param: RegisterUser = ['Hong', 32];
const newUser = registerUser(...param);
console.log('newUser:', newUser);

function registUserObjs({name, age}: {name: string; age:number}){
    const id = 100;
    return {id, name, age};
}

type registUserObj = Parameters<typeof registUserObjs>[number];

const paramObj: registUserObj = {name: 'Hong', age: 32};
const newUser2 = registUserObjs(paramObj);
console.log('newUser2:', newUser2);