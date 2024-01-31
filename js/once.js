function once(f) {
    let didRun = false;
    return function (...args) {
        if (didRun) return; // closure
        didRun = true;
        return f.apply(this, args);

        // return didRun ? undefined : ((didRun = true), f.apply(this, args))
    }
}

console.log(this); // module

const thisObj = {id: 100};
const thisObj1 = {id: 200};
const thisObj2 = {id: 300};

function f(x, y) {
    return `금일 운영금지 차량은 끝번호 ${x}, ${y}입니다! ${this.id}`
}

const fn = once(f)
// const fn = once(f.bind(thisObj))
console.log(fn.call(thisObj,1,6)); // 이 경우에 thisObj를 f에 바인드하고 싶은데 fn에 바인드된다.
console.log(fn.call(thisObj,2,7)); // 이 경우에 thisObj를 f에 바인드하고 싶은데 fn에 바인드된다.