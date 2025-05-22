/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num > 9) {
    const n1 = num % 10;
    const n2 = Math.floor(num / 10);
    num = n1 + n2;
  }
  return num;
};
