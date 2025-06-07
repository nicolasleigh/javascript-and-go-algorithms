// 37. Sudoku Solver

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
  let len = board.length;

  function isValid(row, col, val) {
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false;
      }
    }

    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) {
        return false;
      }
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }

    return true;
  }

  function backtrack() {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== ".") continue;

        for (let val = 1; val <= 9; val++) {
          if (!isValid(i, j, String(val))) continue;

          board[i][j] = String(val);
          if (backtrack()) return true;
          board[i][j] = `.`;
        }
        return false;
      }
    }
    return true;
  }

  backtrack();
  return board;
};
