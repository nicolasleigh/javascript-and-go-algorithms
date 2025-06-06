/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix) {
  const length = matrix.length;

  // Diagonal flip (transpose the matrix)
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // // Vertical axis flip (reverse each row)
  for (let i = 0; i < length; i++) {
    matrix[i].reverse();
  }
}
