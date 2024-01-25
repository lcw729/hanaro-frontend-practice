// console.log(i); // NotInitializedYet - fressness
let i = 1;
console.log('x=', x);
var x = 1;
console.log(ff, f);
// f(); // not a function error

{
  f();
  var x = 2;
  function f() { // 전역 스코프의 function - globalThis에 할당
                 // 호이스팅 시, 선언부에 함수가 아닌 undefined.
    console.log('f>', x, xx); // 1, undefined
  }
  const b = 1;
}

// ff();
function ff() {
  console.log('ff>', y, yy); // 1, yy is not defined
}

if (x >= 2) {
  var y = 5;
  let yy = 55;
}

var xx = 100;
// ff(); // let은 block scope