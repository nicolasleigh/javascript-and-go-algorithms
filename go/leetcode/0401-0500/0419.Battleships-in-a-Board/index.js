/**
 * @param {character[][]} board
 * @return {number}
 */

var countBattleships = function (board) {
  let count = 0;
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "X") {
        // Check if it's the top-left cell of a new battleship
        if ((i === 0 || board[i - 1][j] !== "X") && (j === 0 || board[i][j - 1] !== "X")) {
          count++;
        }
      }
    }
  }

  return count;
};
