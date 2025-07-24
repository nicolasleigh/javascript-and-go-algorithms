/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

function kthSmallest(matrix, k) {
  const n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  // We start at bottom-left of matrix.
  // If matrix[row][col] <= mid, everything above is also ≤ mid (because columns are sorted). So we count row + 1 elements and move right.
  // If matrix[row][col] > mid, we move up to smaller numbers.
  const countLessEqual = (mid) => {
    let count = 0;
    let row = n - 1;
    let col = 0;
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };

  // If the count is less than k, the k-th smallest must be greater than mid.
  // If the count is greater than or equal to k, the k-th smallest could be ≤ mid, so we reduce the search range.
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countLessEqual(mid);
    if (count < k) left = mid + 1;
    else right = mid;
  }

  return left;
}
