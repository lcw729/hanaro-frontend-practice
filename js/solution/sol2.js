// chap.2 - 2

function addPoints(a, b) {
    const len = Math.max(getCharLength(a), getCharLength(b));
    const ret = +(a + b).toFixed(len - 2);

    return ret
    // return operatePoints('+', [a, b]);
}

function operatePoints(operator = '+', ...nums) {

}

function getCharLength(x) { // null인 경우 에러 발생 - !
    return (x ?? 0).toString().length;
}

console.log(addPoints(0.21354, 0.1))
console.log(addPoints(0.14, 0.28))
console.log(addPoints(0.34, 0.226))