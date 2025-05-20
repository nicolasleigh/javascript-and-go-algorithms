// Prototype-based solution
var MinStack = function () {
  this.s1 = []; // main stack
  this.s2 = []; // min stack
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.s1.push(x);
  if (this.s2.length === 0 || x <= this.getMin()) {
    this.s2.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.top() === this.getMin()) {
    this.s2.pop();
  }
  this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s1[this.s1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s2[this.s2.length - 1];
};

// =============================
// Class-based solution
class MinStack {
  constructor() {
    this.s1 = []; // main stack
    this.s2 = []; // min stack
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s1.push(x);
    if (this.s2.length === 0 || x <= this.getMin()) {
      this.s2.push(x);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.top() === this.getMin()) {
      this.s2.pop();
    }
    this.s1.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.s1[this.s1.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.s2[this.s2.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
