/**
 * @param {number} num
 * @return {string}
 */
// Greedy

// I             1
// IV            4
// V             5
// IX            9
// X             10
// XL            40
// L             50
// XC            90
// C             100
// CD            400
// D             500
// CM            900
// M             1000

// 12. Integer to Roman
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
