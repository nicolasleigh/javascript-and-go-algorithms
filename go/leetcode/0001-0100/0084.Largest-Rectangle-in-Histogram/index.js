// 84. Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let minIndexL = [];
  let minIndexR = [];
  let length = heights.length;

  minIndexL[0] = -1;
  minIndexR[length - 1] = length;

  for (let i = 1; i < length; i++) {
    let p = i - 1;
    while (p >= 0 && heights[p] >= heights[i]) {
      // p--  // Time Limit Exceeded
      p = minIndexL[p];
    }
    minIndexL[i] = p;
  }

  for (let i = length - 2; i >= 0; i--) {
    let p = i + 1;
    while (p < length && heights[p] >= heights[i]) {
      // p++ // Time Limit Exceeded
      p = minIndexR[p];
    }
    minIndexR[i] = p;
  }

  let maxArea = 0;
  for (let i = 0; i < length; i++) {
    maxArea = Math.max(maxArea, heights[i] * (minIndexR[i] - minIndexL[i] - 1));
  }

  return maxArea;
};

// Monotonic stack 1
var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack.at(-1)]) {
      let h = heights[stack.pop()];
      let w = stack.length ? i - stack.at(-1) - 1 : i;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  return maxArea;
};

// Monotonic stack 2
var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;

  // Prepend and append 0 to handle edge boundaries
  heights.push(0);
  heights.unshift(0); // Different

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack.at(-1)]) {
      let h = heights[stack.pop()];
      let w = i - stack.at(-1) - 1; // Different
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  return maxArea;
};
