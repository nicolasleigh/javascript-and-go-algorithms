// 202. Happy Number
// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var getSum = function (n) {
  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
};

var getSum2 = function (n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => acc + Number(cur) ** 2, 0);
};

var isHappy = function (n) {
  let set = new Set();
  // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n);
  }
  return n === 1;
};
