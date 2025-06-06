// 55. Jump Game
/*
Imagine you have a car, and you have some distance to travel (the length of the array). 
This car has some amount of gasoline, and as long as it has gasoline, it can keep traveling on this road (the array). 
Every time we move up one element in the array, we subtract one unit of gasoline. 
However, every time we find an amount of gasoline that is greater than our current amount, we "gas up" our car by replacing our current amount of gasoline with this new amount. 
We keep repeating this process until we either run out of gasoline (and return false), or we reach the end with just enough gasoline (or more to spare), in which case we return true.
Note: We can let our gas tank get to zero as long as we are able to gas up at that immediate location (element in the array) that our car is currently at.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let gas = 0;

  for (let n of nums) {
    if (gas < 0) {
      return false;
    } else if (n > gas) {
      gas = n;
    }
    gas--;
  }
  return true;
};

// Solution 2 - Greedy
var canJump = function (nums) {
  let canReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > canReach) return false; // can't reach this index
    canReach = Math.max(canReach, i + nums[i]);
  }

  return true;
};
