// 239. Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const indexArr = []; // stores indices
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // Remove indices from the back of the queue if the corresponding values are less than nums[i] to make sure q[0] is the index of the maximum value
    while (indexArr.length && nums[indexArr.at(-1)] <= nums[i]) {
      // All values that are less than or equal to the current value are popped out of the queue
      indexArr.pop();
    }
    // Add the current index to the back of the queue
    indexArr.push(i);
    // remove first element if it's outside the window
    if (indexArr[0] === i - k) {
      indexArr.shift();
    }
    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      result.push(nums[indexArr[0]]);
    }
  }
  return result;
};
