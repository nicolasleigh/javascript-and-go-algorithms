/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  // Check the first and last row, if there is a 1, then change all the connected 1s to 0 and don't count them.
  for (let j = 0; j < col; j++) {
    if (grid[0][j] === 1) {
      dfs(0, j, false);
    }
    if (grid[row - 1][j] === 1) {
      dfs(row - 1, j, false);
    }
  }

  // Check the first and last column, if there is a 1, then change all the connected 1s to 0 and don't count them.
  for (let i = 0; i < row; i++) {
    if (grid[i][0] === 1) {
      dfs(i, 0, false);
    }
    if (grid[i][col - 1] === 1) {
      dfs(i, col - 1, false);
    }
  }

  // Check the rest of the grid, if there is a 1, then change all the connected 1s to 0 and count them.
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      dfs(i, j, true);
    }
  }

  function dfs(i, j, isCounting) {
    let condition = i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0;

    if (condition) return;
    if (isCounting) count++;

    grid[i][j] = 0;

    dfs(i - 1, j, isCounting);
    dfs(i + 1, j, isCounting);
    dfs(i, j - 1, isCounting);
    dfs(i, j + 1, isCounting);
  }

  return count;
};

var numEnclaves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return;
    grid[r][c] = 0; // mark as sea (visited)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  // Step 1: Flood-fill all land cells connected to the boundary
  for (let r = 0; r < rows; r++) {
    dfs(r, 0);
    dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    dfs(0, c);
    dfs(rows - 1, c);
  }

  // Step 2: Count remaining land cells (enclaves)
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        count++;
      }
    }
  }

  return count;
};
