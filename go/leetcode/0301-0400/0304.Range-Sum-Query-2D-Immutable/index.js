/**
 * @param {number[][]} matrix
 */

class NumMatrix {
  constructor(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // Create prefix sum matrix with extra row and column
    this.prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        this.prefix[i + 1][j + 1] = matrix[i][j] + this.prefix[i][j + 1] + this.prefix[i + 1][j] - this.prefix[i][j];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.prefix[row2 + 1][col2 + 1] -
      this.prefix[row1][col2 + 1] -
      this.prefix[row2 + 1][col1] +
      this.prefix[row1][col1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
