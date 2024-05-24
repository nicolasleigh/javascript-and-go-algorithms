// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/description/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = []; // store the index of temperatures
  stack.push(0);

  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] <= temperatures[stack.at(-1)]) {
      stack.push(i);
    } else {
      while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
        let top = stack.pop();
        res[top] = i - top;
      }
      stack.push(i);
    }
  }
  return res;
};
