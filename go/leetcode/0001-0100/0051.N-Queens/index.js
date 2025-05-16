// 51. N-Queens
// https://leetcode.com/problems/n-queens/description/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const res = [];

  function isValid(row, col) {
    const n = board.length;

    if (col < 0 || col >= n || row < 0 || row >= n) return false;

    // Same column check
    for (let rowArr of board) {
      if (rowArr[col] === "Q") return false;
    }

    let x = col;
    let y = row;
    while (y >= 0 && x < n) {
      if (board[y--][x++] === "Q") return false;
    }

    x = col;
    y = row;
    while (x >= 0 && y >= 0) {
      if (board[y--][x--] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(row, i)) continue;
      board[row][i] = "Q";
      backtrack(row + 1);
      board[row][i] = ".";
    }
  }

  backtrack(0);
  return res;
};

// Solution 2
var solveNQueens = function (n) {
  const res = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const cols = new Set();
  const diag1 = new Set(); // row - col (↘ direction)
  const diag2 = new Set(); // row + col (↙ direction)

  function backtrack(row) {
    if (row === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
        continue;
      }

      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return res;
};
