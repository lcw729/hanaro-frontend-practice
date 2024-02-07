type TUser = {
    id: number;
    name: string
};

type TUser2 = {
    id: number;
    name: string;
    addr?: string;
};


// const jeong: TUser = {id:1, name: 'hong', addr: 'pusan'}; // freshness
const lee: TUser2 = {id:1, name: 'lee', addr: 'seoul'};

let tmpUser: TUser = lee; // freshness off - 변수에 할당
console.log(tmpUser);
let partner: TUser = {...lee, id:2, name:'Kim'};
// let partner2: TUser = {...jeong, id:3, addr: 'daejeon'}; // freshness
let friend: TUser = {...lee};
const xxx2 = {id:9, addr: 'Sokcho'};
let friend2: TUser = {...xxx, id:8};