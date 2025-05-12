// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        res++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    let condition =
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0';

    if (condition) return;

    grid[i][j] = '0';

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  return res;
};
