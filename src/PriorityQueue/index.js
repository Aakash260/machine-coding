class PriorityQueue {
  constructor() {
    this.items = [];
    this.count = 0; // helps maintain order for same priority
  }

  // Add an element with a given priority
  enqueue(value, priority) {
    this.items.push({ value, priority, order: this.count++ });
    // Sort by priority first, then by order (to keep FIFO for same priority)
    this.items.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.order - b.order; // earlier inserted comes first
      }
      return a.priority - b.priority; // lower number = higher priority
    });
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift().value;
  }

  // Return element with highest priority without removing it
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0].value;
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get number of elements
  size() {
    return this.items.length;
  }
}

const pq = new PriorityQueue();

pq.enqueue("Task A", 2);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 3);
pq.enqueue("Task D", 1);

console.log(pq.peek()); // "Task B" (priority 1, inserted before Task D)
console.log(pq.dequeue()); // "Task B"
console.log(pq.dequeue()); // "Task D" (same priority but inserted later)
console.log(pq.size()); // 2
console.log(pq.isEmpty()); // false
