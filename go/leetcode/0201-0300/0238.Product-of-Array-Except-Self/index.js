// Time: O(n)
// Space: O(1) extra (excluding output array)
var productExceptSelf = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  // Pass 1: left product
  let left = 1;
  for (let i = 0; i < n; i++) {
    res[i] = left;
    left *= nums[i];
  }

  // Pass 2: right product
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

var productExceptSelf = function (nums) {
  const n = nums.length;
  const leftPart = new Array(n).fill(1);
  const rightPart = new Array(n).fill(1);
  const result = new Array(n).fill(1);

  // Pass 1: left product
  let left = 1;
  for (let i = 0; i < n; i++) {
    leftPart[i] = left;
    left *= nums[i];
  }

  // Pass 2: right product
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    rightPart[i] = right;
    right *= nums[i];
  }

  for (let i = 0; i < n; i++) {
    result[i] = leftPart[i] * rightPart[i];
  }

  return result;
};
