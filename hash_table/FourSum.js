// 18. 4Sum
// https://leetcode.com/problems/4sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let answer = [];

  if (nums.length < 4) {
    return answer;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum > target) {
          high--;
        } else if (sum < target) {
          low++;
        } else {
          answer.push([nums[i], nums[j], nums[low], nums[high]]);
          let lastLow = nums[low];
          let lastHigh = nums[high];

          do {
            low++;
          } while (low < high && nums[low] === lastLow);

          do {
            high--;
          } while (low < high && nums[high] === lastHigh);
        }
      }
    }
  }
  return answer;
};
