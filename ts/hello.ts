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

class User implements UserIF{
  public id: number;
  name: string;
  city?: string;
  constructor(id: number, name: 'Hong') {
    this.id = id;
    this.name = name;
  }
}

type UserType = {
  id: number;
  name: string;
} & {city?: string};

type CityType = {
  city: string | undefined;
}

const s: string = 'abc';
let i = 1;

const hong: User = {id: 1, name: 'Hong'};
const xxx = { id:2, name: 'Kim', addr:'Seoul'}; // freshness가 꺼진 상태
const kim: User = xxx;
// const kim: User = { id:2, name: 'Kim', addr:'Seoul'}; // freshness 상태 에러


interface Console {
  blur(s: string): void;
}

console.blur('xx');

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

