/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // Binary search to find the correct insertion position
  const bs = (n) => {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      // If n is greater than the middle element, the correct insertion position is in the right half
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }
    // Insert n at the found position
    this.arr.splice(start, 0, n);
  };
  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  return this.arr.length % 2 === 0 ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
