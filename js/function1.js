function hello() {
    const [name] = arguments;
    console.log(`Hello, ${name}!`, [...arguments]);
    return `Hello, ${name}!`
}

hello('hi')

const helloFn = (name) => {
    console.log(`Hello, ${name}!`, arguments);
}
// helloFn('chaewonlee')

hello('Hong');
const hi = hello;
hi('Kim');
console.log('>>', hi.length, hi.name); // hi와 hello는 같은 Fuction Object를 가리키고 있다.

function printFnReturnValue(...args) { // 받는 쪽에서 array 형식으로 받는다.
    console.log(typeof arguments);
    const [fn, nm] = args;
    console.log('printFnRet>>', fn.name, fn(nm));
}
printFnReturnValue(hi, 'Lee')

function f(n) {
    if (n.hasOwnProperty('id')) n.id += 1;
    else n += 1;
}

let n = 10;
let nobj = {id : 10};
f(n) // call by value
f(nobj); // call by reference
console.log(n, nobj);

function ff(a) {
    return a + 100;
}

function ff(a,b) {
    return a + b;
}

console.log(ff(10));
console.log(ff(10, 20));

(function(){
    console.log('IIFE');
})()

(async function() {
    return 1;
})();