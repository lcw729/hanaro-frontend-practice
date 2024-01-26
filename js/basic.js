
const x = 2;
switch (x) {
    case 1:
        console.log('11111', abc);
        break;
    case x === 2: // 연산하면 CASE에 안걸린다.
        console.log('here')
        break;
    case 2:
        var v = 'v';
        const c = 'c';
        console.log('22222')
        // break;
    case 3:
        console.log('2 or 3', x, v, c);
        break;
    default:
        console.log('etc')
}


// if-else문보다 if문으로 끊어쓰는 것이 가독성이 좋다.
function ifFn0(x) {
    if (x === 1) {
        console.log('11111', abc);
        return 111;
    }

    if (x === 2 || x === 3) {
        console.log('2 or 3')
        return 23;
    }

    if (x < 1 || x > 3) {
        console.log('etc');
    }

    return x + 1;
}

