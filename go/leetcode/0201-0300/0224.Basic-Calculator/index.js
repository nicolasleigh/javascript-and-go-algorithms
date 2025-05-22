/**
 * @param {string} s
 * @return {number}
 */

function calculate(s) {
  const stack = [];
  let sum = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (/\d/.test(ch)) {
      let num = 0;
      while (i < s.length && /\d/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      sum += num * sign;
      sign = 1;
      i--; // adjust for outer loop increment
    } else if (ch === "(") {
      stack.push({ prevCalcValue: sum, sign: sign });
      sum = 0;
      sign = 1;
    } else if (ch === ")") {
      const top = stack.pop();
      sum = top.prevCalcValue + top.sign * sum;
    } else if (ch === "-") {
      sign *= -1;
    } else if (ch === "+") {
      sign *= 1;
    }
    // ignore whitespace and other characters
  }

  return sum;
}
