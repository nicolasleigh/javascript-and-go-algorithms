/**
 * @param {number} num
 * @return {string}
 */

function toHex(num) {
  if (num === 0) return "0";

  if (num < 0) {
    num += 2 ** 32; // same as (1 << 32) + num in Go
  }

  const hexDigits = "0123456789abcdef";
  let hexNum = "";

  while (num > 0) {
    const digit = num % 16;
    const hexDigit = hexDigits[digit];
    hexNum = hexDigit + hexNum;
    num = Math.floor(num / 16);
  }

  return hexNum;
}
