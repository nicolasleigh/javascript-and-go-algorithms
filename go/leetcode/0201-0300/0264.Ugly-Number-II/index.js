/**
 * @param {number} n
 * @return {number}
 */

function nthUglyNumber(n) {
  const ugly = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  while (ugly.length < n) {
    const next2 = ugly[i2] * 2;
    const next3 = ugly[i3] * 3;
    const next5 = ugly[i5] * 5;

    const nextUgly = Math.min(next2, next3, next5);
    ugly.push(nextUgly);

    if (nextUgly === next2) i2++;
    if (nextUgly === next3) i3++;
    if (nextUgly === next5) i5++;
  }

  return ugly[n - 1];
}
