/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// From border cell, traverse the whole graph to find the neighbors that have the same or higher value.
// For pacific, start from the top and left border cell. If the value in the pacific array is true, means the water can flow from this cell to the pacific.
// For atlantic, start from the bottom and right border cell.
// In order to find the cell that water can flow to both pacific and atlantic, we need to find the cell that the value is true in both pacific and atlantic arrays.
var pacificAtlantic = function (heights) {
  let res = [];
  let row = heights.length;
  let col = heights[0].length;

  // Create two 2D arrays to keep track of the cells that can reach the pacific and the atlantic
  let pacific = Array(row)
    .fill()
    .map(() => Array(col).fill(false));
  let atlantic = Array(row)
    .fill()
    .map(() => Array(col).fill(false));

  // Check the first column for pacific and the last column for atlantic
  for (let i = 0; i < row; i++) {
    dfs(i, 0, pacific, -Infinity);
    dfs(i, col - 1, atlantic, -Infinity);
  }

  // Check the first row for pacific and the last row for atlantic
  for (let j = 0; j < col; j++) {
    dfs(0, j, pacific, -Infinity);
    dfs(row - 1, j, atlantic, -Infinity);
  }

  // If the cell is visited by both pacific and atlantic, then add it to the result
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  // Check the current cell and its neighbors.
  // If the current cell value (prev) is less than or equal to its neighbor's value,
  // then mark the neighbor as visited (water can flow from the neighbor cell to the current cell)
  function dfs(i, j, visited, prev) {
    if (i < 0 || i >= row || j < 0 || j >= col) return;
    if (visited[i][j]) return; // If the cell is already visited, simply return.

    let neighbor = heights[i][j]; // Current (i,j) cell value
    if (neighbor < prev) return; // If the height of the neighbor cell is less than the height of the previous cell, return.

    visited[i][j] = true; // If the height is greater than or equal to the previous height, mark the cell as visited.
    prev = neighbor; // Update the previous value to the current value.

    // Recursively check the current cell's neighbors
    dfs(i - 1, j, visited, prev);
    dfs(i + 1, j, visited, prev);
    dfs(i, j - 1, visited, prev);
    dfs(i, j + 1, visited, prev);
  }

  return res;
};

var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c, visited) => {
    visited[r][c] = true;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc] && heights[nr][nc] >= heights[r][c]) {
        dfs(nr, nc, visited);
      }
    }
  };

  // First column and last column
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
    dfs(i, n - 1, atlantic);
  }
  // First row and last row
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific);
    dfs(m - 1, j, atlantic);
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
