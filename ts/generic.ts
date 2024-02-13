function identity<T> (input: T) {
    return input;
}

const identity2 = <T>(input: T) => input;

const s1 = identity<string>('me');
const n1 = identity<number>(123);

function makeTuple<First, Second> (first:First, second: Second) {
    return [first, second] as const;
}

const [userName, age] = makeTuple('lim', 25);
const [level, agree] = makeTuple<number,boolean>(10, true);

type Color = 'red' | 'blue' | 'green';
type Address = { sigungu: string, zipcode: string};

interface Info<T, ID = number> {
    id: ID,
    name: string;
    additional?: T;
}

// const info1: Info<Color> = {
//     id: 1,
//     name: "chaewon",
//     additional: 'red'
// };

class MyInfo<T, ID> implements Info<T, ID> {
    id: ID;
    name: string;
    additional: T;

    constructor(id: ID, name: string, additional: T) {
        this.id = id;
        this.name = name;
        this.additional = additional;
    }
}

const me = new MyInfo<Address, number>(1, 'lim', {sigungu: 'seoul', zipcode: '04222'});


type Syrup =
    | { syrup: 'choco', price: 500}
    | { syrup: 'strawberry', price: 800}
type Topping = 'java' | 'cherry';
type Coffee = {menu: string, price: number};

class Factory<T> {
    protected products: T[];

    constructor(product: T) {
        this.products = [product];
    }

    create(product: T) {
        this.products.push(product);
    }

    getProducts() {
        return [...this.products];
    }
}
