import { rand } from './utils/index.js';

try {
    console.log('try...');
    // throw new Error('XXXXX');?
} catch (error) {
    console.log(error)
} finally {
    console.log('finally');
}

/*
Promise Class 이해하기
 */

// callback 방식을 then과 catch를 이용해서 수행할 수 있도록 도운다.
const promi = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); // 1 전달
        // reject(new Err('e'));
    })
});

promi.then(res => console.log(res)); // 함수를 promise의 this.succ에 등록한다.
promi.catch(err => console.error(err)); // 함수를 promise의 this.fail에 등록한다.

class promise {
    constructor(cb) {
        /*
        function cb (resolve, reject) {...};
         */

        // this를 bind해 globalThis가 아닌 인스턴스를 가리키도록 한다.
        cb(this.resolve.bind(this), this.reject.bind(this))(); // cb (this.resolve, this.reject) ();
    }

    resolve(x) { // x의 return 값 - undefined
        this.succ(x); // x라는 값을 가지고 then에 주어진 함수를 실행한다.
    }

    reject (err) {
        this.fail(err);
    }

    then(cb) {
        this.succ = cb; // 이 this는 globalThis이다.
    }

    catch(cb) {
        this.fail = cb;
    }
}

const new_promi = new Promise((resolve, reject) => {
   setTimeout(() => {
       const now = Date.now();
       if (now % 2 === 0) resolve(()=>{console.log('fulfill', now);});
       // else reject(new Error('어디로?'));
   }, 1000);
});

const randTime = () => new Promise((resolve, reject) => {
    const sec = rand(1, 4) * 500;
    setTimeout(() => resolve(sec), sec * 1000);
});

const isParellel = true;
if(isParellel) {
    Promise.all([randTime(), randTime(), randTime()]).then();
} else {
    randTime()
        .then(x => {
            console.log(x);
            return randTime();
        })
        .then(x => {
            console.log(x);
            return randTime();
        });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const f = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) throw new Error("Fail to Fetch!!");
    await sleep(2000); // then과 await을 동일하게 생각
    const data = await res.json();
    return data.name;
};

console.log(await f());

// promise 실수 1
const myFetch = (cb) =>
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then("결과처리")
        .catch("에러처리");

// promise 실수 2
promiseFn().then(res =>
    otherFunction(res)
);