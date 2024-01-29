'use strict';

f = 1;
// NaN = 1;
// Infinity = 0;
console.log('ffff>>', f, NaN, Infinity);
function f(a, aa) {
    console.log('outer f', a)
}
// delete f;
console.log("🚀 ~ f:", f)

{
    f(100);
    function f(a) { // const f = .. in strict mode
        console.log('block f');
    }
}

// f(200, 300);