type Novel = {
    [key: string]: string | number | boolean | {id: number} | undefined;
    id: number;
    title: string;
    addr: {id: number};
    isFree?: boolean;
} & {itemNo: number};

let book : Novel = {id: 1, title: 'IQ84', addr: {id: 300}, itemNo: 33};

type X = {
    id: number;
    name: string;
}

type Y = {id: number, addr: string};
type Z = X | Y;
const compos: Z = {id:1, name: 'Hong', addr: 'Seoul'}; // 잘못된 예 compos.id; 밖에 사용못함.

type nZ = {
    [i: string]: string | number;
    id: number;
} & Y;
// id: string & id: number => Never

const ncompos: nZ = {id:1, name: 'Hong', addr: 'Seoul'};
console.log(ncompos.addr);
