// 59. Spiral Matrix II
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

function spiralMatrix2(n) {
  let startPos = 0;
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop) {
    let row = startPos;
    let col = startPos;
    // to right (left closed right open)
    for (; col < n - offset; col++) {
      result[row][col] = count++;
    }
    // to bottom (top closed bottom open)
    for (; row < n - offset; row++) {
      result[row][col] = count++;
    }
    // to left (right closed left open)
    for (; col > startPos; col--) {
      result[row][col] = count++;
    }
    // to top (bottom closed top open)
    for (; row > startPos; row--) {
      result[row][col] = count++;
    }

    // update start position
    startPos++;

    // update offset
    offset++;

    loop--;
  }

  // if n is odd, assign the middle position of the matrix separately
  if (n % 2 === 1) {
    result[mid][mid] = count;
  }
  return result;
}

// Solution 2
/**
 * @param {number} n
 * @return {number[][]}
 */
// 59. Spiral Matrix II
var generateMatrix = function (n) {
  const res = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1,
    left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  while (left <= right && top <= bottom) {
    // Left → Right
    for (let col = left; col <= right; col++) {
      res[top][col] = num++;
    }
    top++;

    // Top ↓ Bottom
    for (let row = top; row <= bottom; row++) {
      res[row][right] = num++;
    }
    right--;

    // Right ← Left
    for (let col = right; col >= left; col--) {
      res[bottom][col] = num++;
    }
    bottom--;

    // Bottom ↑ Top
    for (let row = bottom; row >= top; row--) {
      res[row][left] = num++;
    }
    left++;
  }

  return res;
};

console.log(spiralMatrix2(3));
console.log(spiralMatrix2(4));
console.log(spiralMatrix2(5));
