console.log('Hello, Typescript!!');
function add(a: number, b: number) {
  return a + b;
}

add(3, 4);


interface cityIF {
  city?: string
}
// type User = {
interface UserIF extends cityIF{
  id: number;
  name: string;
}

// class User implements UserIF{
//   public id: number;
//   name: string;
//   city?: string;
//   constructor(id: number, name: 'Hong') {
//     this.id = id;
//     this.name = name;
//   }
// }

type UserType = {
  id: number;
  name: string;
} & {city?: string};

type CityType = {
  city: string | undefined;
}

const s: string = 'abc';
let i = 1;

// const hong: User = {id: 1, name: 'Hong'};
// const xxx = { id:2, name: 'Kim', addr:'Seoul'}; // freshness가 꺼진 상태
// const kim: User = xxx;
// const kim: User = { id:2, name: 'Kim', addr:'Seoul'}; // freshness 상태 에러


interface Console {
  blur(s: string): void;
}

// console.blur('xx');

// 리터럴 타입
const bt: 'A' | 'B' | 'AB' | 'O' = 'A';
const startHour : 12 | 7 = 7;

const u: undefined = undefined;

type Member = {
  name: string,
  addr: string,
  discountRate: number;
};
type Guest = {
  name: string,
  age: number,
};

type Customer = Member | Guest; // 유니언 타입

const cust: Customer = { // 유니언 타입은 freshness가 느슨해진다
                         // freshness - on
  name: '홍길동',
  age: 26,
  addr: '용산구', // 유니언에 걸려있는 key이기 떄문에 freshness에서 제외된다.
  // xxx; 1,
};

// cust.addr // freshness에서는 제외되지만, addr은 안읽힌다.

const g = { // fressness - off
  name: '홍길동',
  age: 26,
  addr: '용산구',
  xxx: 1
};


function f(p: number | string) {
  if (typeof p === "number")
    return p.toFixed();
  return p.toUpperCase();
}

function mg(user: Member | Guest) {
  // if (typeof user === 'Member'){ // JS에서 사용 불가 - 아래와 같이 사용
  // }

  // user.hasOwnProperty('discountRate') -- 런타임 시, 알 수 있음. 사용하면 안됨.
  if ('discountRate' in user) {
    console.log(user.addr);
  }

  // if (user.hasOwnProperty('discountRate')) {
  //   console.log(user.addr);
  // }
}

class Dog {
   bark() {}
}

class Cat {
  gguk() {}
}

const lucy = new Dog();
if (lucy instanceof Dog) lucy.bark();

let un: {value: number} | undefined;
if (un)
  un.value = 11;

type ANY = any; // go to reference를 사용해서 체크가능


// function addx(a: ANY, b?: ANY) {
// function addx(a: ANY, b: number | undefined) { // 인자 안보냈을 때 undefined로 인식안됨.
// function addx(a: ANY, b: ANY = 10) { // default 값 지정
function addx(a: ANY, b: number | undefined, c = 1): number {
  return a + (b ?? 0);
}


type F = (a: ANY, b: number | undefined, c: number) => number;
const addy = (a: ANY, b?: number, c = 1): number => {
  console.log(`a ${a}, b ${b}, c ${c}`);
  return a + (b ?? 0) + c;
};

console.log(addy(1, 2, 3));
console.log(addy(1, 3));

console.log(addx(1, undefined));


let numArr: number[] = [1,2,3];
numArr = [1];
let numTuple: [number, number] = [1, 2]; // 사이즈가 정해져있음.
numTuple = [3, 4];

function func(age: number, gender?:string, name?:string) { // optional 매개변수는 뒤쪽으로 !
  console.log('age: ', age);

  if (typeof gender === 'string') {
    console.log('gender :', gender);
  }

  if (typeof name === 'string') {
    console.log('name :', name);
  }
}

func(25, 'female', 'chaewon'); // age: 25, gender : female, name : chaewon
func(25, undefined, 'chaewon'); // age: 25, name : chaewon
func(25, 'chaewon'); // age: 25, gender: 'chaewon'


type AF =  (n: number) => {}; // (n: number) => Object와 동일함. // number이지만 Object도 허용 - return에 대해 관대함.
const af: AF = (n: number) => n ** 2;
const af2: AF = function (n) {return n ** 3;}

interface User {
  name: string,
  age: number,
  init(this: User): () => {};
}

let user1: User = {
  name: 'mjo',
  age: 20,
  init: function(this: User) {
    return() => {
      return this.age;
    }
  }
}

let getAge = user1.init();
let age = getAge();

// let numbers: (number|string)[];
// numbers = [1,2,3,4,5];
// numbers.push('six');

type TUser22 = {id: number, name: string};
const kim2 = {id:2, name: 'Kim', addr: 'Pusan'};
const users:TUser22[] = [{id: 3, name: 'aa', addr: '1212'}, kim2];
console.log(kim2);

const dogInfo = ['Jama', 3] as const;
// dogInfo[0] = 'Cream'; // 수정이 불가하다.

const getNameAgeTuple = () : [string, number] => {
  return ['Lim', 20]
}

const nameAndAge = getNameAgeTuple();

const [myName, age2] = getNameAgeTuple();

const a: [number, string, boolean] = [1, 'lim', false];
a[0] = 20;
console.log(a);


let eArr1 = [1,2,3] as const;
let eArr2 = [1,2,3];
let fArr = [...eArr2] as const;


type A1 = [string, number, string];
type B1 = [boolean, C1];
type C1 = {id: string}

const a1:A1 = ['str', 1, 'B'];
const c1:C1 = {id:'cccc'}
const b1: B1 = [true, c1];

// array => union
// ex) ['A', 'B', 'O', 'AB']
const bts = ['A', 'B', 'O', 'AB'];
// type NA = Array<number>;
// type Array<T> = T[]; // ==> number[]
type BT<T extends unknown[]> = T[number];
const bloodType: BT<typeof bts> = 'AB';
console.log(bloodType);

interface Counts {
  [key: string]: number
}

const counts: Counts = {};
counts.apple = 3;
counts.banana = 5;

interface INovel {
  title: string;
  1: string;
  [key: string]: string | number;
}

interface IndexSignature2 {
  // [key: number]: string;
  [key: string]: string | number;
}

const idxsig2: IndexSignature2 = {
  1: 'str',
  2: 22,
  k: 'str'
}

interface A {
  id: number | string;
}

interface B {
  id: number;
}

interface C extends A {
  name: string;
  id: number | string;
}

// interface D extends B {
//   name: string;
//   id: number | string;
// }
