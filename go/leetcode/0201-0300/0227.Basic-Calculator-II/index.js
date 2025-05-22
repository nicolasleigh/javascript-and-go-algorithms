/**
 * @param {string} s
 * @return {number}
 */

function calculate(s) {
  const stack = [];
  let num = 0;
  let sign = "+";
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (/\d/.test(ch)) {
      num = num * 10 + parseInt(ch);
    }

    if (/[+\-*/]/.test(ch) || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / num)); // truncate toward zero
      }
      sign = ch;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
