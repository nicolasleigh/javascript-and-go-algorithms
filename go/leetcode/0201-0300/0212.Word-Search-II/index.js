/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null; // Set when the node marks the end of a word
  }
}

function buildTrie(words) {
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.word = word;
  }
  return root;
}

var findWords = function (board, words) {
  const result = [];
  const root = buildTrie(words);
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (r, c, node) => {
    const char = board[r][c];
    if (!node.children.has(char)) return;

    const nextNode = node.children.get(char);
    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null; // Avoid duplicates
    }

    board[r][c] = "#"; // Mark as visited

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== "#") {
        dfs(nr, nc, nextNode);
      }
    }

    board[r][c] = char; // Restore after visit
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return result;
};
