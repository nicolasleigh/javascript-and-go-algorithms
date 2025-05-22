class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x) {
    this.stackIn.push(x);
  }

  pop() {
    this._transfer();
    return this.stackOut.pop();
  }

  peek() {
    this._transfer();
    return this.stackOut[this.stackOut.length - 1];
  }

  empty() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }

  _transfer() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
