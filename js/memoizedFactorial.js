
let runCnt = 0;
// O(N)
function factorialBeforeMemorization(n){
    runCnt += 1
    if (n === 1) return 1;
    return n * factorial(n-1);
}

// O(logN)
// 좋지 않은 코드 - 비순수함수
const memoizedTable = {}; // {5: 5 * 24, 4 : 4 * 6
                           //  3 : 3 * 2, 2 : 2 * 1}
function factorial(n){
    runCnt += 1
    if( n === 1) return 1;
    return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}

const f3 = factorial(3);
console.log("🚀 ~ f3:", f3, runCnt)

runCnt = 0;
const f5 = factorial(5);
console.log("🚀 ~ f5:", f5, runCnt)


function memoized(fn) { 
    const memoizedTable = {}; // 사이드이팩트를 줄이기 위해 memoizedTable을 함수 내에 선언
    return function(k) {
        // if(memoizedTable[k]) return memoizedTable[k];
        // return (memoizedTable[k] = fn(k));
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    }
}

function memoizedFactorial(n) {
    return memoized(function (n){
        if (n === 1) return 1;
        return n * memoizedFactorial(n - 1);
    })
}

const mf3 = memoizedFactorial(3);
console.log("🚀 ~ mf3:", mf3, runCnt)

runCnt = 0;
const mf5 = memoizedFactorial(5);
console.log("🚀 ~ mf5:", mf5, runCnt)

