/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const indexArr = []; // stores indices
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    while (indexArr.length && nums[indexArr.at(-1)] <= nums[i]) {
      indexArr.pop();
    }
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
