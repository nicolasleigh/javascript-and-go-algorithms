// 134. Gas Station
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// Greedy
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let rest = 0;
  let curSum = 0;
  let totalSum = 0;

  for (let i = 0; i < gas.length; i++) {
    rest = gas[i] - cost[i];
    curSum += rest;
    totalSum += rest;

    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }

  if (totalSum < 0) return -1;

  return start;
};
