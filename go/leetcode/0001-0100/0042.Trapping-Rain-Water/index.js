// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
// Monotonic stack
var trap = function (height) {
  let sum = 0;
  let stack = [];
  stack.push(0);

  for (let i = 1; i < height.length; i++) {
    if (height[i] <= height[stack.at(-1)]) {
      stack.push(i);
    } else {
      while (stack.length && height[i] > height[stack.at(-1)]) {
        let top = stack.pop();
        if (stack.length) {
          let h = Math.min(height[i], height[stack.at(-1)]) - height[top];
          let w = i - stack.at(-1) - 1;
          sum += h * w;
        }
      }
      stack.push(i);
    }
  }
  return sum;
};

// Brute force
var trap = function (height) {
  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) continue;

    let rHeight = height[i];
    let lHeight = height[i];
    for (let r = i + 1; r < height.length; r++) {
      if (height[r] > rHeight) rHeight = height[r];
    }
    for (let l = i - 1; l >= 0; l--) {
      if (height[l] > lHeight) lHeight = height[l];
    }
    let h = Math.min(lHeight, rHeight) - height[i];
    if (h > 0) sum += h;
  }
  return sum;
};

var trap = function (height) {
  let sum = 0;
  let maxL = new Array(height.length).fill(0);
  let maxR = new Array(height.length).fill(0);

  for (let i = 1; i < height.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i + 1]);
  }
  for (let i = 0; i < height.length; i++) {
    let h = Math.min(maxL[i], maxR[i]) - height[i];
    if (h > 0) sum += h;
  }
  return sum;
};

// two-pointer
var trap = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        res += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        res += maxRight - height[right];
      }
      right--;
    }
  }

  return res;
};
