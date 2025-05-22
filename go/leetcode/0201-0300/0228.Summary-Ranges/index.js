/**
 * @param {number[]} nums
 * @return {string[]}
 */

function summaryRanges(nums) {
  const res = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const start = nums[i];
    while (i + 1 < n && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    if (nums[i] !== start) {
      res.push(`${start}->${nums[i]}`);
    } else {
      res.push(`${start}`);
    }
  }

  return res;
}
