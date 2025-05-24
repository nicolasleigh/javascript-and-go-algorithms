/**
 * @param {number} turnedOn
 * @return {string[]}
 */

var readBinaryWatch = function (turnedOn) {
  const res = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const bits = (h << 6) | m; // combine hour and minute into 10 bits
      const bitCount = bits.toString(2).split("1").length - 1;
      if (bitCount === turnedOn) {
        res.push(`${h}:${m.toString().padStart(2, "0")}`);
      }
    }
  }

  return res;
};

var readBinaryWatch = function (turnedOn) {
  const res = [];

  // Count the number of 1s in the binary representation of n
  function countBits(n) {
    let count = 0;
    while (n > 0) {
      if ((n & 1) === 1) count++;
      n >>= 1;
    }
    return count;
  }

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const bitCount = countBits(h) + countBits(m);
      if (bitCount === turnedOn) {
        res.push(`${h}:${m.toString().padStart(2, "0")}`);
      }
    }
  }

  return res;
};
