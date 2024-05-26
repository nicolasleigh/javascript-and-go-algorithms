// 130. Surrounded Regions
// https://leetcode.com/problems/surrounded-regions/description/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Similar to "1020. Number of Enclaves", but using visited array to avoid the stack overflow
var solve = function (board) {
  let row = board.length;
  let col = board[0].length;
  let visited = Array(row)
    .fill()
    .map(() => Array(col).fill(false)); // NEW

  for (let j = 0; j < col; j++) {
    if (board[0][j] === 'O') {
      dfs(0, j, false);
    }
    if (board[row - 1][j] === 'O') {
      dfs(row - 1, j, false);
    }
  }

  for (let i = 0; i < row; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 0, false);
    }
    if (board[i][col - 1] === 'O') {
      dfs(i, col - 1, false);
    }
  }

  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      dfs(i, j, true);
    }
  }

  function dfs(i, j, isChanging) {
    let condition =
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] === 'X';

    if (condition) return;
    if (visited[i][j]) return; // NEW
    if (isChanging) board[i][j] = 'X';

    visited[i][j] = true; // NEW

    dfs(i - 1, j, isChanging);
    dfs(i + 1, j, isChanging);
    dfs(i, j - 1, isChanging);
    dfs(i, j + 1, isChanging);
  }

  return board;
};
