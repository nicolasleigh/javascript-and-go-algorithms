class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
  }

  peek() {
    return this.nextVal;
  }

  next() {
    const current = this.nextVal;
    this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
    return current;
  }

  hasNext() {
    return this.nextVal !== null;
  }
}

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.nextVal;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  const current = this.nextVal;
  this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
  return current;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.nextVal !== null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
