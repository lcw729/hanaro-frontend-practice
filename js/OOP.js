class Animal {

    static ID = 1;
    #name; // private 변수
    static isDog(ani) {
        return ani.name === 'Dog'
    }
    constructor(name) {
        console.log('Animal.constructor>>', name);
        this.name = name || super.name;
    }
}

class Dog extends mixinPetFeed(Animal) { // mixin
    constructor(name) {
        super(name);
    }

    [Symbol.iterator]() {
        return this.name.split('').values();
    }

    move() {
        console.log('MOV!!!');
    }

    bark() {
        console.log('bowwow!');
    }
}

function mixinPetFeed (mainClass) {
    // Object.assign(mainClass.prototype, { feed: Pet.prototype.feed});
    return mainClass
}

const jake = new Dog('Jake');
jake.move();
jake.bark();
const its = jake[Symbol.iterator]();
console.log(its);

const obj = {
    id: 1,
    name: "Animal",
    f() {
        console.log('fffffff');
    }
}
const dog = new Animal('Dog'); // 인스턴스 생성
console.log('dog: ', dog.name);

const cat = new Animal('Cat');
console.log('cat: ', cat.name);

console.log(obj.__proto__);
console.log(dog.__proto__);
console.log(Object.getPrototypeOf(dog));

console.log(Animal.isDog(dog));

Object.defineProperties(Animal.prototype, {
    upperName: {
        get: function (){
            return this.name.toUpperCase();
        }
    }
})

Object.defineProperties(Array.prototype, {
    first: {
        get: function (){
            return this[0];
        }
    },
    last: {
        get: function (){
            return this[this.length - 1];
        }
    }
})

console.log('>>>upperName: ',dog.upperName);


const arr_t = [1,2,3];
console.log(arr_t.first);
console.log(arr_t.last);

// Object's static methods -- create
console.log('obj.proto>>', obj.__proto__);
console.log('obj: ', obj);

const objX = Object.create(obj);
console.log('objX: ', objX);
console.log('objX.proto:', objX.name);

Array.prototype.first = function () {
    return this[0];
};
const arr = [1, 2, 3];
// console.log(arr.first());

// Singleton Pattern
class Singleton {
    static #_instance; // data 영역
    #name;
    #map;

    constructor() {
        if (Singleton.#_instance)
            return Singleton.#_instance;
        console.log('Singleton.constructor!!!');
        this.name = 'Singleton';
        Singleton.#_instance = this;
    }

    static getInstance() {
        // if (!this.#_instance) return this.#_instance;
        // return new this();
        return this.#_instance || new this();
    }

    // overriding cf. overloading
    toString() {
        return `[Singleton: ${this.name}]`;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();
const s3 = Singleton.getInstance();

class Emp {
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `first: ${this.firstName}, last: ${this.lastName}`;
    }
}

const hong = new Emp();
hong.fullName = 'Kildong Hong';
console.log(hong.firstname);
console.log(hong.fullName);

const objProxy = new Proxy(obj,{
    get(target, prop) {
        console.log('proxy.get>>', prop);
        return target[prop];
    }
});
objProxy.id = 100;
console.log('***>>', objProxy.id, obj['id']);


function *gener() {
    const x = yield 1;
    const y = yield (x + 10);
    console.log('x y =', x, y);
    return x + y;
}

const it3 = gener();
console.log(it3.next());
console.log(it3.next(3));
console.log(it3.next(5));