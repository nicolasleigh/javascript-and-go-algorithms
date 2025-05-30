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

var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const answer = Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
};
