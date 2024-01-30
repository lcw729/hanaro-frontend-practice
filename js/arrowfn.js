function f(a) {
    return a**2;
}

console.log(f(3));

const af = (a) => a**2;
console.log(af(3));

function f2(a, b) { // 전역 함수로 사용하겠다. functiontable 등록
    const c = a**b;
    return Math.sqrt(c);
}

const af2 = (a, b) => { // 이 블록 스코프에서만 사용하겠다. functiontable 등록 X
    c = a**b;
    return Math.sqrt(c);
}

function fff_org(a) {
    return function (b) {
        for (let i = 1; i < 10; i += 1)
            console.log((`${a} x ${i} = ${a * i}`)); // closure
        console.log(b);
    }
}

// curring
// 언어를 선택하면, 함수들이 특정 언어에 대한 함수로 바뀌는 경우
// 다크모드를 선택하면, 함수들이 다크모드에 대한 함수로 바뀌는 경우
const fff = a => b => {
    for (let i = 1; i < 10; i += 1)
        console.log((`${a} x ${i} = ${a * i}`));
    console.log(b);
};

const gugu2dan = fff(2);
const gugu3dan = fff(3);
gugu2dan('2단 종료');
gugu3dan('3단 종료');


// this
globalThis.y = 10; // 전역객체 선언
globalThis.name = "GlobalName";
this.name = "ModuleName";
function bfn_fd(x) {
    console.log(x, this.y); // this는 전역객체에 바인딩된다.
}

const bfn = x => console.log(x, this.y); // this는 내 부모의 this를 가리킨다. 전역의 부모는 없음 = undefined

bfn(9);
bfn.bind({y: 999})(7);

const obj = {
    name: 'objName',
    bark() {
        console.log('1=', this.name);
        const self = this;
    },
    f1: function () { // method와 동급
        console.log('f1>>', this.name); // this -> 함수의 부모
    },
    f2: () => { // this -> f2를 포함한 객체의 부모
        console.log('f2>>', this.name, this);
    },
};
console.log('type>>', typeof obj.f1, typeof obj.f2);
obj.f1();
obj.f1.bind({name: 'X1'})();

const xxx1 = obj.f1;
const xxx2 = obj.f2;
const oname = obj.name;
xxx2();
