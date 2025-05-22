/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

// // Solution 2 - Quick select
// function findKthLargest(nums, k) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (true) {
//     const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
//     const newPivotIndex = partition(nums, left, right, pivotIndex);
//     if (newPivotIndex === nums.length - k) {
//       return nums[newPivotIndex];
//     } else if (newPivotIndex > nums.length - k) {
//       right = newPivotIndex - 1;
//     } else {
//       left = newPivotIndex + 1;
//     }
//   }
// }

// function partition(nums, left, right, pivotIndex) {
//   const pivot = nums[pivotIndex];
//   [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
//   let storeIndex = left;

//   for (let i = left; i < right; i++) {
//     if (nums[i] < pivot) {
//       [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
//       storeIndex++;
//     }
//   }
//   [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
//   return storeIndex;
// }
