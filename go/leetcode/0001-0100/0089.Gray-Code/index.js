/**
 * @param {number} n
 * @return {number[]}
 */

// When n=3, we can get the result based on n=2. 00,01,11,10 -> (000,001,011,010)(110,111,101,100)
function grayCode(n) {
  const res = [0];

  for (let i = 0; i < n; i++) {
    const size = res.length;
    for (let k = size - 1; k >= 0; k--) {
      res.push(res[k] | (1 << i));
    }
  }

  return res;
}
