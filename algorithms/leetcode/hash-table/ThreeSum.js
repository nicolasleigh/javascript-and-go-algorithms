// 15. 3Sum
// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = [];

  if (nums.length < 3) {
    return answer;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum > 0) {
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        answer.push([nums[i], nums[low], nums[high]]);
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
  return answer;
};
