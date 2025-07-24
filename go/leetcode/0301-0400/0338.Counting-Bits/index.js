/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const res = [];

  for (let i = 0; i <= n; i++) {
    let sum = 0;
    let num = i;

    while (num !== 0) {
      sum += num & 1; // add last bit
      num = num >> 1; // right shift to process next bit
    }

    res.push(sum);
  }

  return res;
}
