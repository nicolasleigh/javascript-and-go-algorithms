/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let resArr = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);
    while (left < right) {
      [resArr[left], resArr[right]] = [resArr[right], resArr[left]];
      left++;
      right--;
    }
  }
  return resArr.join("");
};
