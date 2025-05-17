/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // Backtracking function
  const backtrack = (i, j, k) => {
    if (k === word.length) return true;
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) return false;

    // Temporarily mark the cell as visited
    const temp = board[i][j];
    board[i][j] = " ";

    // Explore in all four directions
    const found =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i, j - 1, k + 1);

    // Restore the original value
    board[i][j] = temp;

    return found;
  };

  // Try starting from every cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
};
