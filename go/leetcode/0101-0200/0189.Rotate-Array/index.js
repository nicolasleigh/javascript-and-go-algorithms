function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  // Reverse the entire array
  reverse(nums, 0, n - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining n - k elements
  reverse(nums, k, n - 1);
}

// Helper function to reverse elements in-place
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Solution 2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  nums.reverse();
  const num1 = nums.slice(0, k).reverse();
  const num2 = nums.slice(k).reverse();
  nums.splice(0, n, ...num1.concat(num2));
}
