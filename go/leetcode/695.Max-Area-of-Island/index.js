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
    let condition = i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0;

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

var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return 0;

    grid[r][c] = 0; // mark visited
    let area = 1;

    area += dfs(r - 1, c);
    area += dfs(r + 1, c);
    area += dfs(r, c - 1);
    area += dfs(r, c + 1);

    return area;
  };

  let maxArea = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
};
