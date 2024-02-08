
interface TTUser {
    id: number;
    name: string;
}

interface TTDept {
    id: number;
    dname: string;
    captain: string;
}

// type Ud2 = (TTUser | TTDept) & {addr: string};


// 인덱스 시그니처
// interface Ud2 extends Partial<TTUser>, Partial<TTDept>{
interface Ud2{
    [idx: string]: string| number;
    id: number;
    addr: string
}

const ud2: Ud2 = {id:1, name: 'HH', addr: 'Seoul'};
const ud3: Ud2 = {id:1, dname: 'HH', captain: 'HH', addr: 'Seoul'};
