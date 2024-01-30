const f1_org = function (f, val) {
  return f(val);
};

const f1 = (f, val) => f(val);

f1(console.log, 'abc');

function fx1(a) {
    return a ** 2
}

console.log(f1(fx1, 2));

const f2_org = function (f) {
    return function (...args) { // args => array ...args => array가 풀린다. (rest 연산자)
        return f(...args);
    }
};

const f2 =
    f =>
        (...args) =>
            f(...args);

const X = f2(Math.max);
const result = X(1, 3, 4, 5, 2);
console.log('result:', result);

// map( function(item, idx) {})
// function parseInt(str) => number
const arr = ['1','2','3'];
const arr2 = new Array('1','2','3');

const rets = arr.map(parseInt); // [ 1, NaN, NaN ]
// arr.map( function(item, idx, this))
// parseInt('1',0, ['1','2','3'])
// parseInt('2',1, ['1','2','3'])
// parseInt('3',2, ['1','2','3'])
console.log(rets); // [ 1, NaN, NaN ]

Array.prototype.mapX = function(f){
    const result = [];
    for(let i = 0; i < this.length; i += 1) {
        result.push(f(this[i], i, this));
    }
    return result;
}

const ret2_org = arr.mapX(function (item){
    return parseInt(item);
});

const cb = item => parseInt(item)
console.log(cb.length)
const ret2 = arr.mapX(cb);

console.log(ret2);

const unary = fn => (fn.length === 1 ? fn : (arg) => fn(arg)); // 함수의 인자가 여러 개라면, 한 개만 받겠다.
const unaryCb = unary(cb);
const unaryParseInt = unary(parseInt); // parseInt에서 첫번째 인자만 쓰겠다.
console.log('ret3', arr.mapX(unaryCb));
console.log('ret4', arr.mapX(unaryParseInt));

console.log('ret5', arr.mapX(
    unary(parseInt)
))