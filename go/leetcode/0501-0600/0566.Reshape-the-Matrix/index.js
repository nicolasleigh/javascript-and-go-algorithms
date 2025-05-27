/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const result = Array.from({ length: r }, () => new Array(c));
  let row = 0,
    col = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      }
    }
  }

  return result;
};
