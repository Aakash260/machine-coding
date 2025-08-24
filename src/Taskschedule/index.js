class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.pendingQueue = [];
    this.runningQueue = [];
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      try {
        this.pendingQueue.push({ task, resolve, reject });
        this.#processTasks();
      } catch (error) {
        reject(error);
      }
    });
  }

  #processTasks() {
    if (this.getRunningCount() < this.concurrency && this.getPendingCount()) {
      const { task, resolve } = this.pendingQueue.shift();
      this.runningQueue.push(task);

      setTimeout(
        () => {
          console.log(`processing.task: `, task);
          resolve(true);
          this.runningQueue = this.runningQueue.filter((t) => t !== task);
          this.#processTasks();
        },
        Math.random() > 0.4 ? 1000 : 2000
      );
    }
  }

  getPendingCount() {
    return this.pendingQueue.length;
  }

  getRunningCount() {
    return this.runningQueue.length;
  }
}

const t = new TaskQueue(5);
t.addTask({ task: "go.work.123123", createdAt: new Date() });
t.addTask({ task: "go.work.19", createdAt: new Date() });
t.addTask({ task: "go.work.123i", createdAt: new Date() });
t.addTask({ task: "go.work.120", createdAt: new Date() });
t.addTask({ task: "go.work.123123", createdAt: new Date() });
t.addTask({ task: "go.work.19", createdAt: new Date() });

setTimeout(() => {
  t.addTask({ task: "after5.work.123123", createdAt: new Date() });
  t.addTask({ task: "after5.work.19", createdAt: new Date() });
  t.addTask({ task: "after5.work.123i", createdAt: new Date() });
  t.addTask({ task: "after5.work.120", createdAt: new Date() });
  t.addTask({ task: "after5.work.123123", createdAt: new Date() });
  t.addTask({ task: "after5.work.19", createdAt: new Date() });
}, 5000);
