// 695. Max Area of Island
// https://leetcode.com/problems/max-area-of-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// Similar to "200. Number of Islands"
var maxAreaOfIsland = function (grid) {
  let res = 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        // res = Math.max(res, dfs(i, j));
        dfs(i, j);
        res = Math.max(res, count);
        count = 0;
      }
    }
  }

  function dfs(i, j) {
    let condition =
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === 0;

    // if (condition) return 0;
    if (condition) return;

    count++;
    grid[i][j] = 0;

    // return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  return res;
};
