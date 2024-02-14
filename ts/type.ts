// Mapped Typed
type Animals = 'dog' | 'cat' | 'pig' | 9;
type AnimalCounts = {
    [key in Animals]: number;
}

type AnimalCounts2<T extends string | number> = {
    [key in T extends string ? T : `x${T}`]: T extends string ? string : number ;
};
type Ac2 = AnimalCounts2<Animals>;

/*
interface Animal {
    name: string;
}
interface Dog extends Animal {}
interface Rose {}
type Q<T> = T extends Animal ? string : number;
type D = Q<Dog>; // string
type R = Q<Rose>; // number;

let type_a: R;
type_a = 123;
*/

// readonly
type CreateMutable<T> = {
    -readonly [key in keyof T]: T[key];
}

type CreateImmutable<T> = {
    readonly [key in keyof T]: T[key];
}

// optional
type Concrete<T> = {
    [key in keyof T]-?: T[key];
}

// 조건부 타입

interface QueryOptions {
    throwIfNotFound: boolean;
}

type QueryResult<Options extends QueryOptions> =
    Options['throwIfNotFound'] extends true ? string : string | undefined;

declare function retrieve<Options extends QueryOptions>( // 제네릭이 생략되면 unknown이 된다.
    // Options extends QueryOptions ? Options : unknown
    key: string,
    options?: Options,
): Promise<QueryResult<Options>>

// type type_b = QueryResult<undefined>;
// async function doQuery() {
//     const res1 = await retrieve('GET /api/1.0/users'); // string | undefined
// }

// 연습문제
interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

/*
type A = keyof IUser & keyof IDept
type B = keyof(IUser & IDept)

type Combine<T, U> = {
    // keyof T & U
    // keyof T & keyof T : 공통된 Key만
    [key in keyof (T & U)] : key extends (keyof T & keyof U) ? T[key] | U[key]:  (T & U)[key];
};
type ICombined = Combine<IUser, IDept>;
let type_c: ICombined = {
    id : 20,
    age: 'ab',
    name: 'chaewon',
    dname: 'chaewon',
    captain: 'aaaa'
};

type TUser = {
    id: number,
    name: string,
};

type TDept  = {
    id: number,
    dname: string,
    captain: string
}

type TAddrUser = TUser & {
    addr: string
};

const ud1: TAddrUser = {id: 20, name: 'aaa', addr:'bbb'};
const ud2: (TUser | TDept) = {
    id: 20,
    name: 'aaa',
    // dname: 'bbb'
    // addr:'bbb'
}

console.log(ud2.name)

// infer
type TI<T,U> = T extends U[] ? U : T;
type TII<T> = T extends (infer U)[] ? U : T;

type TT1 = TI<string[], string>;
type TT2 = TI<string, string>;
type TT3 = TI<number[], number>;

type TTI1 = TII<string[]>; // string[] - (infer U)[] : U는 string으로 유추된다.
type TTI2 = TII<string>; // array 형태가 아니기 때문에 추론이 안된다.

// never, 유니언 타입
type OnlyString<T> = T extends string ? T : never;
type RedOrBlue = OnlyString<'red' | 'blue' | 0 | false>; // 'red' | 'blue' | never | never

type OnlyStringProperties<T> = {
    [key in keyof T]: T[key] extends string ? key | never;
} [keyof T]; // value 가져오기

interface AllEventData {
    participants: string[];
    location: string;
    name: string;
    year: number;
}

type YYY = OnlyStringProperties<AllEventData>;
type QQQ = YYY[keyof YYY]; // never | location | name | never => location | name

type G = 'Hi' | 'Hello'
type GG = `${G}xx` // (x + y) * z 'Hixx' | 'Helloxx'
type GGG = `${`/${number}` | ''}`;

type Greeting = `Hello${string}`
const g1: Greeting = 'Hello123'


type User = {id: number, name: string, location: string, year: number};
type Datakey = keyof User;

type ExistenceChecks = {
    [key in `check${Capitalize<Datakey>}`]: (user: User) => boolean;
}

let user: User;
function checkExistence(checks: ExistenceChecks) {
    checks.checkLocation(user);
    checks.checkName(user);
}

interface DataEntry<T> {
    key: T;
    value: string;
}

type DataEntryGetters = {
    [key in Datakey as `get${Capitalize<key>}`]: () => DataEntry<key>;
}
*/

/*
type PPP<F extends (a: any, b:any) => any> = ReturnType<F>; // 범용적인 함수 생성을 위해 any를 사용한다.
function add(a: number, b: number) {return a + b};

type ADD = PPP<typeof add>


type TurnIntoGettersDirect<T> = {
    // &는 extends와 같은 역할을 한다.
    [key in keyof T as `get${key & string}`]: () => T[key];
}

type User2 = {id: number, name: string, location: string, age: number}
type JustString<T> = {
    [key in keyof T as (key & string)] : () => T[key]
}
type GettersJustString = JustString<User2>;
let user_d = {
    id: 2,
    name: 'a',
    location: 'e',
    age: 20
};
*/


function log(s: string){

}

function add(a: number, b: string) {
    return a + b;
}

type AA = FirstArgs<typeof add>;  // number
type BB = SecondArgs<typeof add>; // string
// type BLog = SecondArgs<typeof log>; // unknown -- 문제
type BLog = SecondArgs2<typeof log> //never
type CC = Args<typeof add>; // number | string

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined

type FirstArgs<F> = F extends (...args: [infer First, ...any[]]) => any ? First : never;
// type FirstArgs<F> = F extends (a: infer First, ...b: any) => any ? First : never;
type SecondArgs<F> = F extends (a: infer First, b: infer Second, ...r: any) => any ? Second : never;
type Args<F> = F extends (...args: infer arg) => any ? arg[number] : never; // number는 0부터 순차적으로 값이 들어간다.
type FirstArgs2<F> = F extends (...args: infer arg) => any ? arg[0] : never; // number는 0부터 순차적으로 값이 들어간다.

type AllArgs<F> = F extends (...args: infer arg) => any ? arg : never; // number는 0부터 순차적으로 값이 들어간다.
type SecondArgs2<F> = AllArgs<F>[1] extends undefined ? never : AllArgs<F>[1];