// import fetch from 'node-fetch';

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const sampleUrl2 = 'https://jsonplaceholder.typicode.com/users/1';
const myFetch = url => fetch(url) // response를 받는다.
    .then(res => res.json()) // response를 받아 packet을 merge한다.
    .then(data => console.log('data>>', data));

myFetch(sampleUrl).then(user => {
    console.log('user>>> ', user);
});

const myFetchWithPromise  = (url) => new Promise
((resolve, reject) => {
    fetch(url)
        .then(res => res.json())
        .then(resolve)
        .catch(error => console.log('Error:', error));
});

console.log(await myFetchWithPromise(sampleUrl));

const myFetchWithAsyncAwait  = async (url) => {
    try {
        const res = await fetch(url);
        return res.json(); // 함수 실행 시, await을 쓰기 때문에 여기에는 await 쓰지 않아도 됨.
    } catch (error) {
        console.error('Error: ', error);
    }
}; // new promise를 반환한다.

console.log(await myFetchWithAsyncAwait(sampleUrl));

const rets = [sampleUrl, sampleUrl2].map(async (url) => { //
    const res = await fetch(url);
    const data = await res.json();
    return data;
})
// 함수 실행을 OS에 던지고, task queue에 함수가 들어간다.
// 이후 callstack에 들어간 후 pop되는데, 이떄 결과를 담을 공간이 없다.
// 실행은 되지만, 함수 실행 결과는 반환받지 못한다.
/*

for (const s of [sampleUrl, sampleUrl2]) {
    rets.push(f(s));
 */
console.log('rets:', rets)