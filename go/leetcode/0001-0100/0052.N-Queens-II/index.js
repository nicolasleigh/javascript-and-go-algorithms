/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
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
  return res.length;
};

// Solution 2
var totalNQueens = function (n) {
  let count = 0;

  const cols = new Set();
  const diag1 = new Set(); // row - col (↘)
  const diag2 = new Set(); // row + col (↙)

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
        continue;
      }

      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return count;
};
