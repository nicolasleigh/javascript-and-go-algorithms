/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // Custom comparator: if a+b > b+a, then a should come before b
  nums.sort((a, b) => {
    const s1 = "" + a + b;
    const s2 = "" + b + a;
    return s2.localeCompare(s1);
  });

  // Edge case: when the largest number is 0 (e.g., [0, 0])
  if (nums[0] === 0) return "0";

  return nums.join("");
};

// Helper function to compare two numbers
function compare(n1, n2) {
  return n1.toString() + n2.toString() > n2.toString() + n1.toString();
}

// Bubble sort version
function largestNumber(nums) {
  const n = nums.length;
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (!compare(nums[j], nums[j + 1])) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  if (nums[0] === 0) return "0"; // handle edge case like [0, 0]
  return nums.join("");
}
