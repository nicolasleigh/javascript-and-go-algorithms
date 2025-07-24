// 240. Search a 2D Matrix II
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const val = matrix[row][col];
    if (val === target) {
      return true;
    } else if (val > target) {
      col--; // move left
    } else {
      row++; // move down
    }
  }

  return false;
}
