function addPoints(a, b) {
    len1 = checkFloat(a)
    len2 = checkFloat(b)
    max = len1 > len2 ? len1 : len2

    console.log(len1)

    return parseInt((a + b) * (10 ** max)) / (10 ** max)
}

function checkFloat(num, max = 10){
    for(let i = 0; i < max; i += 1) {
        console.log(parseInt(num * 10) / 10)
        sub = num - parseInt(num * 10) / 10
        if (sub == 0){
            return i
        }
        num = num * 10
    }
}

console.log(addPoints(0.21354, 0.1))
console.log(addPoints(0.14, 0.28))
console.log(addPoints(0.34, 0.226))