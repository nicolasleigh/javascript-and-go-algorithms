/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function (s) {
  let numFlag = false;
  let dotFlag = false;
  let eFlag = false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c >= "0" && c <= "9") {
      numFlag = true;
    } else if (c === "." && !dotFlag && !eFlag) {
      dotFlag = true;
    } else if ((c === "e" || c === "E") && !eFlag && numFlag) {
      eFlag = true;
      numFlag = false; // Must have digits after 'e' or 'E'
    } else if ((c === "+" || c === "-") && (i === 0 || s[i - 1] === "e" || s[i - 1] === "E")) {
      continue;
    } else {
      return false;
    }
  }

  return numFlag;
};
