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

console.log(spiralMatrix2(3));
console.log(spiralMatrix2(4));
console.log(spiralMatrix2(5));
