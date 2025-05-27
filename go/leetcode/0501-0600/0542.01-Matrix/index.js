/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const queue = [];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Step 1: Initialize queue with all 0s, and set 1s to Infinity
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  // Step 2: BFS from each 0
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
        if (mat[nx][ny] > mat[x][y] + 1) {
          mat[nx][ny] = mat[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return mat;
};
