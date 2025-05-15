/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const n = num1.length;
  const m = num2.length;
  const tmp = new Array(n + m).fill(0);

  // Multiply digits from right to left
  for (let i = n - 1; i >= 0; i--) {
    const digit1 = num1.charCodeAt(i) - "0".charCodeAt(0);
    for (let j = m - 1; j >= 0; j--) {
      const digit2 = num2.charCodeAt(j) - "0".charCodeAt(0);
      const product = digit1 * digit2;
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = product + tmp[p2];

      tmp[p2] = sum % 10;
      tmp[p1] += Math.floor(sum / 10);
    }
  }

  // Convert result array to string, skipping leading zeros
  let result = "";
  for (let digit of tmp) {
    if (!(result === "" && digit === 0)) {
      result += digit;
    }
  }

  return result;
};
