const isStringNumber = (value: unknown): value is [string, number] => {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && typeof value[1] === 'number';
}

const f1 = (value: number | string | boolean | [string, number]) => {
    console.log(isStringNumber(value))
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed())
    }
};

f1('a');
f1(2);
f1(true);
f1(['a', 2]);

interface Animal {}
interface Dog extends Animal {
    name: string;
}

interface Cat extends Animal {
    punch() : void;
}

function isDog(a: Animal): a is Dog {
    return 'name' in a && !('punch' in a);
    // return this.constructor.name === 'Dog';
}

class Animal {}
class Dog {}
class Cat {}

const dog: Animal = new Animal();
console.log(isDog(dog));

const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];