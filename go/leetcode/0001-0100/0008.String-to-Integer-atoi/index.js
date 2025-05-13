/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let i = 0;
  let n = s.length;
  let sign = 1;
  let result = 0;

  // 1. Skip leading whitespaces
  while (i < n && s[i] === " ") {
    i++;
  }

  // 2. Check for optional '+' or '-' sign
  if (i < n && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // 3. Process numerical digits and stop at first non-digit
  while (i < n && s[i] >= "0" && s[i] <= "9") {
    let digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

    // 4. Check for overflow/underflow
    if (result > Math.floor((2 ** 31 - 1) / 10) || (result === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }

    result = result * 10 + digit;
    i++;
  }

  return sign * result;
}
