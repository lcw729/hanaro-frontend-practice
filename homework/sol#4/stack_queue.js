// import assert from 'assert'; // ESM
const assert = require('assert'); // CJS

class Collection {
    _arr;
    constructor(...args) {
        this._arr = Array.isArray(args[0]) ? args[0] : args;
    }
    get _arr() {}
    push(value) {
        this._arr.push(value);
        return this;
    }

// 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
    get peek() {
        return this._arr.at(
            this.isStack() ? -1 : 0
        );
    }

    isStack() {
        return this.constructor.name === 'Stack'
    }

// 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제
    get poll() {
        return this._arr.splice(
            (this.isStack()? -1 : 0), 1)[0];
    }
// 모든 원소 지우기
    clear() {
        this._arr.splice(0, this.size);
    }
// array 타입 반환
    toArray() {
        return [...this._arr];
    }
// 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
    remove() {
        this._arr.splice(
            (this.isStack()? -1 : 0), 1);
    }
// 원소가 하나도 없으면 true
    get isEmpty() {
        return this._arr.length === 0;
    }
// 현재 원소의 개수
    get size() {
        return this._arr.length;
    }
}

class Stack extends Collection {
    pop() { return this._arr.pop(); }
}

class Queue extends Collection {
    enqueue(value) { this.push(value); return this; }
    dequeue() { return this._arr.shift(); }
}


const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop(); // [1,2,3]
assert.strictEqual(stack.peek, 3); // 3 반환
stack.remove(); // 3 삭제
assert.strictEqual(stack.poll, 2); // 2 삭제
assert.deepStrictEqual(stack.toArray(), [1]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5); // [1, 3, 5]
queue.dequeue(); // [3, 5]
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);
if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);