// primitive(call-by-value) vs object(call-by-reference)
const userName = 'Hong'; // string (primitive)
var age; // declare + define (undefined)
console.log("🚀 ~ age:", age)
age = 33;
console.log(`Hello, ${userName}!`)

// console.log(zz);
// ReferenceError: zz is not defined
// let zz = <NotYetInitialized>; // TDZ => 무력화!(Freshness)
 
let zz;
zz = 9; // 이 라인 실행 시 암묵적 var! globalThisValue
console.log(zz);
// console.log(globalThis(zz)); // OK