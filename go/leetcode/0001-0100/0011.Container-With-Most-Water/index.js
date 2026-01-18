/**
 * @param {number[]} height
 * @return {number}
 */
// 11. Container With Most Water
function maxArea(height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const width = end - start;
    let high;

    if (height[start] < height[end]) {
      high = height[start];
      start++;
    } else {
      high = height[end];
      end--;
    }

    const temp = width * high;
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
