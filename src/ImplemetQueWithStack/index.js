class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // main stack
    this.stack2 = []; // helper stack
  }

  // Add element to the queue
  enqueue(value) {
    this.stack1.push(value);
  }

  // Remove element from the queue
  dequeue() {
    if (this.isEmpty()) return null;

    // Move everything from stack1 to stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  // Peek at the front element
  peek() {
    if (this.isEmpty()) return null;

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  // Check if queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const q = new QueueUsingStacks();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.peek()); // 10
console.log(q.dequeue()); // 10
console.log(q.dequeue()); // 20
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 30
console.log(q.isEmpty()); // true
