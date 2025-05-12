// 1020. Number of Enclaves
// https://leetcode.com/problems/number-of-enclaves/description/

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
    let condition =
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === 0;

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
