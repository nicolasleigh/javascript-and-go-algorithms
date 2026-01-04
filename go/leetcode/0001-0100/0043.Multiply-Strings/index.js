/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 43. Multiply Strings
function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const result = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = (num1[i] - "0") * (num2[j] - "0");
      const p1 = i + j;
      const p2 = i + j + 1;
      // 本次循环的p2是上次循环的p1，即是上次循环的进位位置
      const sum = mul + result[p2];

      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10); // 将进位加到p1位置
    }
  }

  while (result[0] === 0) {
    result.shift();
  }

  return result.join("");
}
