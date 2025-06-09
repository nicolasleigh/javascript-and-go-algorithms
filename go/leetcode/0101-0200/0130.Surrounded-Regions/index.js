// 130. Surrounded Regions
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
    if (board[0][j] === "O") {
      dfs(0, j, false);
    }
    if (board[row - 1][j] === "O") {
      dfs(row - 1, j, false);
    }
  }

  for (let i = 0; i < row; i++) {
    if (board[i][0] === "O") {
      dfs(i, 0, false);
    }
    if (board[i][col - 1] === "O") {
      dfs(i, col - 1, false);
    }
  }

  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      dfs(i, j, true);
    }
  }

  function dfs(i, j, isChanging) {
    let condition = i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === "X";

    if (condition) return;
    if (visited[i][j]) return; // NEW
    if (isChanging) board[i][j] = "X";

    visited[i][j] = true; // NEW

    dfs(i - 1, j, isChanging);
    dfs(i + 1, j, isChanging);
    dfs(i, j - 1, isChanging);
    dfs(i, j + 1, isChanging);
  }

  return board;
};

// Solution 2
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const rows = board.length;
  const cols = board[0].length;

  if (rows === 0 || cols === 0) return;

  // DFS to mark border-connected 'O's as 'B'
  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== "O") {
      return;
    }

    board[i][j] = "B"; // Temporarily mark as safe

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  // Step 1: Mark all border-connected 'O's
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === "O") dfs(i, 0);
    if (board[i][cols - 1] === "O") dfs(i, cols - 1);
  }
  for (let j = 0; j < cols; j++) {
    if (board[0][j] === "O") dfs(0, j);
    if (board[rows - 1][j] === "O") dfs(rows - 1, j);
  }

  // Step 2: Flip the rest 'O' → 'X', and 'B' → 'O'
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X"; // Surrounded region
      } else if (board[i][j] === "B") {
        board[i][j] = "O"; // Restore safe region
      }
    }
  }
}
