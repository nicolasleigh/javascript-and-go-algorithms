var isValidSudoku = function (board) {
  const rowBuf = Array.from({ length: 9 }, () => Array(9).fill(false));
  const colBuf = Array.from({ length: 9 }, () => Array(9).fill(false));
  const boxBuf = Array.from({ length: 9 }, () => Array(9).fill(false));

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell !== ".") {
        const num = Number(cell) - 1;
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (rowBuf[r][num] || colBuf[c][num] || boxBuf[boxIndex][num]) {
          return false;
        }
        rowBuf[r][num] = true;
        colBuf[c][num] = true;
        boxBuf[boxIndex][num] = true;
      }
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === ".") continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};
