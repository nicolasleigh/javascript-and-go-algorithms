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
      // build the full number
      while (i < s.length && /\d/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      sum += num * sign;
      sign = 1; // reset sign
      i--; // adjust for outer loop increment
    } else if (ch === "(") {
      stack.push({ prevCalcValue: sum, sign: sign });
      sum = 0; // reset sum
      sign = 1; // reset sign
    } else if (ch === ")") {
      const top = stack.pop();
      sum = top.prevCalcValue + top.sign * sum;
    } else if (ch === "-") {
      sign *= -1; // sign = -1 also correct
    } else if (ch === "+") {
      sign *= 1; // sign = 1 also correct
    }
    // ignore whitespace and other characters
  }

  return sum;
}
