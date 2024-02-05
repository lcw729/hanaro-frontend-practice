import { arrutils } from './utils/index.js'; // import하면 자동으로 관련 파일들이 실행된다.

const arr = [1,2,3];
console.log('arr: ', {...arr});
console.log('arr: ',arr.entries());
console.log('arr: ', arr.length);
arr.length = 5;
console.log('arr: ', arr) // arr:  [ 1, 2, 3, <2 empty items> ]

const a = new Array(3);
console.log('a: ', a);

const a2 = Array(5).fill(1);
a2.fill('X',2,4);
a2.fill(0, -4, -2);
console.log('a2: ', a2);

const ar3 = Array.from(arr);
arr[1] = 22;
console.log(arr);
console.log(ar3);

const ar4 = Array.from({length: 5}, (_, i) => i + 1);
console.log(ar4)

arr.length = 20;
arr.push(20);
console.log('arr: ', arr);
console.log(arr.map((_, idx) => idx)); // [ 0, 1, 2, <17 empty items>, 20 ]
arr.forEach((item, i)=> console.log(i, item));

console.log(Array.from(Array(5).keys()));
console.log(Array.from(Array(5).values()));
console.log(Array.from(Array(5).entries()));

// const a41 = Array(5).map((_,i) => i + 1);
const a41 = [...Array(5)].map((_,i)=>i+1);
console.log('a41:', a41);

console.log([...'abcdefg']);
console.log(typeof Array(5));

console.log("------------LIFO--------------")
const stack = []; // LIFO
stack.push(1);
stack.push(2);
console.log('stack: ',stack);
stack.pop();
console.log('stack: ',stack);

console.log("------------FIFO--------------")
const queue = []; // FIFO
queue.push(1);
queue.push(2, 3);
console.log('queue: ', queue);
queue.shift();
console.log('queue: ', queue);
queue.shift();
console.log('queue: ', queue);

const idxArr1 = arr.indexOf(1);
const orr = [{id: 1}, {id: 2}, {id: 1}];
const idx1 = orr.indexOf({id: 1});
console.log('idx1:', idx1);

console.log(arr.includes(1));
console.log(arr.includes(5));

orr.findIndex((item) => item.id === 1);

for (const item of orr) console.log(item);
for (const [idx, item] of orr.entries()) console.log(idx, item);
orr.forEach((item, idx) => console.log(idx, item)); // 메모리 사용량이 훨씬 적다.
const mret1 = orr.map((item, idx)=>`${idx + 1}. ${item.id}`);
console.log('mret1:', mret1); // 무조건 요소의 갯수만큼 return한다.

const mret2 = orr.filter((item, idx)=> item.id > 1);
console.log('mret2:', mret2); // 무조건 요소의 갯수만큼 return한다.

const aa = [1,2,3];
console.log(aa[-1]);
console.log(aa.join(','));
aa[10] = 10;
aa['1'] = 22;
delete aa[2];
console.log(aa);

aa['a'] = 'AAA';
console.log(aa);
aa.b = 'BBB';
console.log(aa);

const a22 = [2, 22];
function myConcat(...args) {
    if (Array.isArray(args[0])){
        return [...a22, ...args[0]];
    }
    const argsArr = Array.isArray(args[0]) ? args[0] : args;
    return [...a22, ...argsArr];
}

const a22_1 = myConcat(3, 33);
console.log(a22_1);

const a22_2 = myConcat([3, 33]);
console.log(a22_2);

const a5 = [1, 5, 4, 11, 7];
console.log('a5:', [...a5].sort((a,b) => {
    console.log('a,b=', a, b)
    return a > b ? 1 : -1;
})
);
console.log('a6:',a5.sort());
console.log(a5)


const users = [
    {id: 1, name: 'Hong'},
    {id: 20, name: "Kim"},
    {id: 3, name: 'Lee'}
];

const sorted_users = users.sort((a, b) => a.id > b.id);
const arr2 = [1,2,3,4,5];
arr2.splice(1,3); // [2, 3, 4]
console.log('result1: ',arr2);
arr2.splice(1,0,2,3,4); // [1, 2, 3, 4, 5]
console.log('result2: ',arr2);
arr2.splice(2);
console.log('result3: ',arr2); // [1, 2]
arr2.splice(2, 0, 3, 4, 5) // [1, 2, 3, 4, 5]
arr2.splice(2, 1, 'X', 'Y', 'Z');
console.log('result4: ',arr2); // [1, 2, 'X', 'Y', 'Z', 4, 5]

const ex_arr2 = [1, 2, 3, 4, 5];
const ex1 = ex_arr2.slice(1,3);
console.log(ex1);

const ex2 = ex_arr2.slice(2);
console.log(ex2);

ex_arr2.splice(1,3);
console.log(ex_arr2);

ex_arr2.splice(1,0,2,3,4);
console.log(ex_arr2);

const ex3 = ex_arr2.splice(2)
console.log(ex_arr2);

ex_arr2.splice(2,0,...ex3)
console.log(ex_arr2);

const ex7 = [...ex_arr2]
ex7.splice(2,1,'X','Y','Z');
console.log(ex7)

console.log([...ex_arr2.slice(0,2), 'X', 'Y', 'Z', ...ex_arr2.slice(-2)]);

// 배열 평탄화 - flat, flatMap
const flat1 = [1,4,9].map(a => [a**2, Math.sqrt(a)]);
console.log(flat1.flat());

let sum1 = 0;
for (let item of arr) sum1 = sum1 + item;
console.log('sum1: ', sum1);

console.log(arr)
const sum2 = arr.reduce((sum, item) => sum += item, 0);
console.log(sum2);

const users_2 = users.reduce((s, user) => {
    // s = '' user.name = 'Hong' => ' Hong'
    // s = ' Hong' user.name = ' Kim' => ' Hong Kim'
    // s = ' Hong Kim' user.name = ' Lee' => ' Hong Kim Lee'
    return `${s} ${user.name}`;
}, '');
console.log(users_2);


// // objs의 각 원소를 reduce를 이용하여 합쳐보세요.
const arr_ex10 = [{id : 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];

const result2 = arr_ex10.reduce((acc, item) => ({ ...acc, ...item}), {});
console.log(result2);