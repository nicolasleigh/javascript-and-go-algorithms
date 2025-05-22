// One-queue version
var MyStack = function () {
  this.queue = [];
};

MyStack.prototype.push = function (x) {
  this.queue.push(x);
  // Rotate the queue to move x to the front
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.queue.shift();
};

MyStack.prototype.top = function () {
  return this.queue[0];
};

MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

// Two-queues version
var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q2.push(x);

  // Move all elements from q1 to q2
  while (this.q1.length > 0) {
    this.q2.push(this.q1.shift());
  }

  // Swap q1 and q2
  [this.q1, this.q2] = [this.q2, this.q1];
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
