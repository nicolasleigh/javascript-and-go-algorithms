class TrieNode {
  constructor() {
    this.children = {}; // Map character -> TrieNode
    this.isEndOfWord = false; // Marks the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this._traverse(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._traverse(prefix) !== null;
  }

  _traverse(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }
}
