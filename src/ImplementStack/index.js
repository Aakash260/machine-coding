class Stack {
  constructor() {
    this.items = []; // Initialize stack storage
  }

  push(element) {
    this.items.push(element); // Add element
  }

  pop() {
    return this.items.pop(); // Remove and return last element
  }

  peek() {
    return this.items[this.items.length - 1]; // Last element
  }

  isEmpty() {
    return this.items.length === 0; // True if empty
  }

  size() {
    return this.items.length; // Number of elements
  }

  clear() {
    this.items = []; // Reset stack
  }
}

// Usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // 20
console.log(myStack.pop()); // 20
console.log(myStack.size()); // 1
console.log(myStack.isEmpty()); // false
myStack.clear();
console.log(myStack.isEmpty()); // true
