/**
 * @param {number} num
 * @return {string}
 */

// Greedy
function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let res = "";
  let i = 0;

  while (num > 0) {
    while (values[i] > num) {
      i++;
    }
    num = num - values[i];
    res = res + symbols[i];
  }

  return res;
}
