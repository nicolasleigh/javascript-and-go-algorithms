/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return;

  let isFirstRowZero = false;
  let isFirstColZero = false;

  // Check if first column has any 0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      isFirstColZero = true;
      break;
    }
  }

  // Check if first row has any 0
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowZero = true;
      break;
    }
  }

  // Use first row and column to mark zero positions
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Set zeroes based on marks for rows
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < matrix[0].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Set zeroes based on marks for columns
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Handle first row
  if (isFirstRowZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  // Handle first column
  if (isFirstColZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};
