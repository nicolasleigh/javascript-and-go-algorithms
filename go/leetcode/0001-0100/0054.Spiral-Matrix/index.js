var spiralOrder = function (matrix) {
  const m = matrix.length;
  if (m === 0) return [];

  const n = matrix[0].length;
  if (n === 0) return [];

  let top = 0,
    left = 0,
    bottom = m - 1,
    right = n - 1;
  const res = [];
  const sum = m * n;
  let count = 0;

  while (count < sum) {
    // Traverse from left to right
    let i = top,
      j = left;
    while (j <= right && count < sum) {
      res.push(matrix[i][j]);
      j++;
      count++;
    }

    // Traverse from top+1 to bottom
    i = top + 1;
    j = right;
    while (i <= bottom && count < sum) {
      res.push(matrix[i][j]);
      i++;
      count++;
    }

    // Traverse from right-1 to left
    i = bottom;
    j = right - 1;
    while (j >= left && count < sum) {
      res.push(matrix[i][j]);
      j--;
      count++;
    }

    // Traverse from bottom-1 to top+1
    i = bottom - 1;
    j = left;
    while (i > top && count < sum) {
      res.push(matrix[i][j]);
      i--;
      count++;
    }

    // Move inwards
    top++;
    left++;
    bottom--;
    right--;
  }

  return res;
};

// Solution 2
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 54. Spiral Matrix
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0]?.length;
  if (m === 0 || n === 0) return [];

  const res = [];
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const dirs = [
    [0, 1], // right →
    [1, 0], // down ↓
    [0, -1], // left ←
    [-1, 0], // up ↑
  ];

  let row = 0,
    col = 0,
    dir = 0;

  for (let i = 0; i < m * n; i++) {
    res.push(matrix[row][col]);
    visited[row][col] = true;

    const [dx, dy] = dirs[dir];
    const nextRow = row + dx;
    const nextCol = col + dy;

    if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || visited[nextRow][nextCol]) {
      dir = (dir + 1) % 4; // change direction
    }

    row += dirs[dir][0];
    col += dirs[dir][1];
  }

  return res;
};
