/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = "";
  while (n > 0) {
    n--; // Adjust to 0-based index
    const charCode = String.fromCharCode((n % 26) + 65); // 65 = 'A'.charCodeAt(0)
    result = charCode + result;
    n = Math.floor(n / 26);
  }
  return result;
};
