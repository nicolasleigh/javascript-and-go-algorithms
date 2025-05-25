/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 4 directions: up, down, left, right
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let res = 0;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] !== 1) continue;
      // for each cell, check its 4 neighbors
      for (let k = 0; k < 4; k++) {
        let nextRow = i + dir[k][0];
        let nextCol = j + dir[k][1];
        // if the neighbor cell is out of boundary or water, perimeter + 1
        if (nextRow < 0 || nextRow >= rowLen || nextCol < 0 || nextCol >= colLen || grid[nextRow][nextCol] === 0) {
          res++;
        }
      }
    }
  }
  return res;
};

var islandPerimeter = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let perimeter = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        perimeter += 4;

        // Subtract shared edges with upper and left neighbor
        if (r > 0 && grid[r - 1][c] === 1) perimeter -= 2;
        if (c > 0 && grid[r][c - 1] === 1) perimeter -= 2;
      }
    }
  }

  return perimeter;
};
