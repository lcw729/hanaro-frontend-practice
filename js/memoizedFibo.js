let runCnt = 0;


const testfibo = function(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return testfibo(n-1) + testfibo(n-2);
}


function memoized(fn) {
    const memoizedTable = {}
    console.log(memoizedTable)
    return function B(n) {
        return memoizedTable[n] || (memoizedTable[n] = fn(n))
    }
}

function fibo(n) {
    console.log('this is n: ', n);
    return memoized(function (n) {
        runCnt += 1
        if (n === 0) return 0;
        else if (n === 1) return 1;
        else return fibo(n - 1) + fibo(n - 2);
    })
}

const memoizedFibo2 = fibo(2);
console.log("🚀 ~ memoizedFibo2:", memoizedFibo2, runCnt)

runCnt = 0;
const memoizedFibo5 = fibo(5);
console.log("🚀 ~ memoizedFibo5:", memoizedFibo5, runCnt)

runCnt = 0;
const memoizedFibo7 = fibo(7);
console.log("🚀 ~ memoizedFibo7:", memoizedFibo7, runCnt)

const fibo5 = testfibo(5)
console.log('fibo5 : ', fibo5)