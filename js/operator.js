const user = {id: 1, name: 'P', age: 33};

console.log('id' in user);

console.log(user.id)

console.log(user.hasOwnProperty('id'))
console.log(Reflect.has(user, 'name'))

// in
const keys = Object.keys(user)
for(let k in keys) console.log('k =', k)

// new
class Dog {}
const lucy = new Dog();

// rest
function f(a, b, ...c) {
    console.log("🚀 a:", [...arguments])
    console.log("🚀 c:", c)
    for (const x of c){
        console.log('c>>', x)
    }
}

f(1, 2, 3, 4)

// instanceof
console.log(lucy instanceof Dog)

// delete
delete user.age
console.log(user)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i in arr) {
    if (i > 5) break;
    console.log(i)
}