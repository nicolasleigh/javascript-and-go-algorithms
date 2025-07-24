// 16. 3Sum Closest
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  const n = nums.length;
  if (n < 3) return 0;

  nums.sort((a, b) => a - b);

  let closestSum = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n - 2; i++) {
    // Optional duplicate skip (not required for closest sum)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum === target) {
        return sum; // Early return: exact match
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
