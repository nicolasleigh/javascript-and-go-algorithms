// 827. Making A Large Island
// https://leetcode.com/problems/making-a-large-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  // 4 directions
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let nextColor = 2; // 0 and 1 are used, so start from 2
  let islandSize = {}; // key: color, value: size

  // find the islands and paint them with different colors
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] !== 1) continue;
      paint(r, c, nextColor);
      nextColor++;
    }
  }

  function paint(r, c, color) {
    // if not the island cell or already painted, do nothing.
    if (r < 0 || r === rowLen || c < 0 || c === colLen || grid[r][c] !== 1)
      return;

    grid[r][c] = color; // paint the cell
    islandSize[color] = (islandSize[color] || 0) + 1; // update the size

    // recursively paint the neighbors
    for (let i = 0; i < 4; i++) {
      let nextRow = r + dir[i][0];
      let nextCol = c + dir[i][1];
      paint(nextRow, nextCol, color);
    }
  }

  let res = Math.max(...Object.values(islandSize), 0);

  // create a new island cell and calculate the largest size
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] !== 0) continue;
      let neighborColor = new Set();

      for (let i = 0; i < 4; i++) {
        let nextRow = r + dir[i][0];
        let nextCol = c + dir[i][1];

        // if the neighbor cell is not the island cell, skip
        if (
          nextRow < 0 ||
          nextRow === rowLen ||
          nextCol < 0 ||
          nextCol === colLen ||
          grid[nextRow][nextCol] === 0
        )
          continue;

        // if the neighbor is the island, add it to the set
        neighborColor.add(grid[nextRow][nextCol]);
      }

      // create a new island cell
      let newIslandSize = 1;

      // iterate this new island cell's neighbors, and add their sizes
      for (let color of neighborColor) {
        newIslandSize += islandSize[color];
      }
      res = Math.max(res, newIslandSize);
    }
  }

  return res;
};
