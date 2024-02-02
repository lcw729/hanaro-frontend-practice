class Collection {
    #arr;
    constructor(...args) { // [a, b, c]  a, b, c
        this.#arr = Array.isArray(args[0]) ? args[0] : args;
    }

    get _arr() {
        return this.#arr;
    }

    push(value) {
        this.#arr.push(value);
        return this;
    }

    peek() {
        return this.#arr.at(
            this.isStack() ?  -1 : 0
        );
    }

    isStack() {
        return this.constructor.name === 'Stack';
    }

    size() {
        return this.#arr?.length;
    }

    toString() {
        return `${this.constructor.name}(${this.size()})${JSON.stringify(this.#arr)}`;
    }

    toArray() {
        // return this.#arr - shallow copy로 변경 가능 위험!!!!
        return [...this.#arr];
    }

    print() {
        console.log(this.toString());
    }
}

class Stack extends  Collection{

    constructor(...args) { // - 생략 가능
        super(...args);
    }

    pop() {
        return this._arr.pop();
    }

}

class Queue extends Collection{

    enqueue(value) {
        this.push(value);
        return this;
    }

    dequeue(){
        return this._arr.shift();
    }
}

const stack = new Stack([1, 2]);
stack.print();
stack.push(3).push(5)
console.log('last pop=', stack.pop());

const queue = new Queue();
queue.enqueue(10).enqueue(20);
queue.print();
console.log('last queue=', queue.dequeue());