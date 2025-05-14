/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  if (!s) return 0;

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let lastNum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    const num = roman[char];

    if (num < lastNum) {
      total -= num;
    } else {
      total += num;
    }

    lastNum = num;
  }

  return total;
}
