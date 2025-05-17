/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;

  let low = 0;
  let high = total - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const val = matrix[row][col];

    if (val === target) {
      return true;
    } else if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

// Solution 2
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;

  // Flatten the 2D matrix into a 1D array
  const flat = [];
  for (let i = 0; i < rows; i++) {
    flat.push(...matrix[i]);
  }

  // Binary search on the 1D array
  let low = 0,
    high = total - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (flat[mid] === target) {
      return true;
    } else if (flat[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};
