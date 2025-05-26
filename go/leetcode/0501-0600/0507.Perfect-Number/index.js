/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;

  let sum = 1; // 1 is always a divisor
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      sum += i;
      const pair = num / i;
      if (pair !== i) sum += pair;
    }
  }

  return sum === num;
};
