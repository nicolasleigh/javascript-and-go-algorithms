var addBinary = function (a, b) {
  // Ensure `a` is the longer string
  if (b.length > a.length) {
    [a, b] = [b, a];
  }

  let res = new Array(a.length + 1).fill("");
  let i = a.length - 1;
  let j = b.length - 1;
  let k = a.length;
  let carry = 0;

  while (i >= 0 && j >= 0) {
    let ai = parseInt(a[i]);
    let bj = parseInt(b[j]);
    res[k] = ((ai + bj + carry) % 2).toString();
    carry = Math.floor((ai + bj + carry) / 2);
    i--;
    j--;
    k--;
  }

  while (i >= 0) {
    let ai = parseInt(a[i]);
    res[k] = ((ai + carry) % 2).toString();
    carry = Math.floor((ai + carry) / 2);
    i--;
    k--;
  }

  if (carry > 0) {
    res[k] = "1";
  }

  return res.join("");
};

// Solution 2
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};
