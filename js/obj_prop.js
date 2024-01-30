// exam1. for-in으로 key, value CNFFUR
const arr = [100, 200, 300, 400, 500, 600, 700];

for (let k in arr) {
    console.log(k);
}

for (let k in arr) {
    console.log(arr[k]);
}

function ex1() {
    const obj = {name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false};

    for (let k in obj) {
        console.log(k);
    }

    for (let k in obj) {
        console.log(obj[k]);
    }

    for (let k of Reflect.ownKeys(obj)) {
        console.log(k);
    }

    Object.defineProperty(obj, 'level', {enumerable: false});
    console.log(Object.entries(obj));
    Object.defineProperty(obj, 'role', {writable: false});
    obj.role = 'XXXXXXXXXXXX'
    console.log(obj.role)
}


const orgArray = [
    ['A', 10, 20],
    ['B', 30, 40],
    ['C', 50, 60, 70],
];

function makeObjectFromArray(obj) {
    const retObj = {};
    for (const [k, ...v] of obj) {
        retObj[k] = v;
    }
    return retObj
}

function makeArrayFromObject(obj) {
    const retArr = []
    for(const k in obj) {
        retArr.push([k,...obj[k]]);
    }
    return retArr;
}

const newObj = makeObjectFromArray(orgArray);
console.log(newObj);
const newArr = makeArrayFromObject(newObj);
console.log(newArr);

function ex3() {
    const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
    function copyObject(obj) {
        const retObj = {};
        for (const k in obj) {
            retObj[k] = obj[k];
        }
        return retObj;
    }

    const newKim = copyObject(kim);
    console.log('copiedKim:', newKim);
    newKim.addr = 'Daegu';
    console.log(kim.addr !== newKim.addr);
}