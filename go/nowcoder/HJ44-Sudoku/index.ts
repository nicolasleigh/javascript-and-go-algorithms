const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
  if (inputs.length === 9) {
    const board = solveSudoku();
    const result = board.map((row) => row.join(" "));
    for (const row of result) {
      console.log(row);
    }
  }
});

// 相同：LeetCode 37. Sudoku Solver
function solveSudoku() {
  const board = inputs.map((row) => row.split(" "));
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
        if (board[i][j] !== "0") continue;

        for (let val = 1; val <= 9; val++) {
          if (!isValid(i, j, String(val))) continue;

          board[i][j] = String(val);
          if (backtrack()) return true;
          board[i][j] = `0`;
        }
        return false;
      }
    }
    return true;
  }

  backtrack();
  return board;
}
