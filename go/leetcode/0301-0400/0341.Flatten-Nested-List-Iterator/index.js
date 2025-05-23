/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedIterator {
  constructor(nestedList) {
    this.stack = [];

    // We reverse the list so we can process it from left to right
    this._pushListToStack(nestedList);
  }

  _pushListToStack(list) {
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }

  hasNext() {
    while (this.stack.length > 0) {
      let top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return true;
      }

      // If it's a list, expand it
      this.stack.pop();
      this._pushListToStack(top.getList());
    }
    return false;
  }

  next() {
    return this.stack.pop().getInteger();
  }
}

// Prototype-Based
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = [];

  // We reverse the list so we can process it from left to right
  this._pushListToStack(nestedList);
};

NestedIterator.prototype._pushListToStack = function (list) {
  for (let i = list.length - 1; i >= 0; i--) {
    this.stack.push(list[i]);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  while (this.stack.length > 0) {
    let top = this.stack[this.stack.length - 1];
    if (top.isInteger()) {
      return true;
    }

    // If it's a list, expand it
    this.stack.pop();
    this._pushListToStack(top.getList());
  }
  return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.stack.pop().getInteger();
};
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
