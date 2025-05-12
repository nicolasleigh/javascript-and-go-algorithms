// 51. N-Queens
// https://leetcode.com/problems/n-queens/description/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  const res = [];

  function isValid(row, col) {
    const n = board.length;

    if (col < 0 || col >= n || row < 0 || row >= n) return false;

    // Same column check
    for (let rowArr of board) {
      if (rowArr[col] === 'Q') return false;
    }

    let x = col;
    let y = row;
    while (y >= 0 && x < n) {
      if (board[y--][x++] === 'Q') return false;
    }

    x = col;
    y = row;
    while (x >= 0 && y >= 0) {
      if (board[y--][x--] === 'Q') return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      res.push(board.map((row) => row.join('')));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(row, i)) continue;
      board[row][i] = 'Q';
      backtrack(row + 1);
      board[row][i] = '.';
    }
  }

  backtrack(0);
  return res;
};
