// Object-Based
class TrieNode {
  constructor() {
    this.children = {}; // character -> TrieNode
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
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
    return this._dfs(word, 0, this.root);
  }

  _dfs(word, index, node) {
    if (index === word.length) {
      return node.isEndOfWord;
    }

    const char = word[index];
    if (char === ".") {
      // Try all possible children
      for (const child of Object.values(node.children)) {
        if (this._dfs(word, index + 1, child)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children[char]) return false;
      return this._dfs(word, index + 1, node.children[char]);
    }
  }
}

// Array-Based
class WordDictionary {
  constructor() {
    this.children = new Array(26).fill(null); // 26 lowercase letters
    this.isEndOfWord = false;
  }

  addWord(word) {
    let cur = this;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97; // 'a'.charCodeAt(0) = 97
      if (!cur.children[index]) {
        cur.children[index] = new WordDictionary();
      }
      cur = cur.children[index];
    }
    cur.isEndOfWord = true;
  }

  search(word) {
    return this._searchHelper(word, 0);
  }

  _searchHelper(word, pos) {
    let cur = this;
    for (let i = pos; i < word.length; i++) {
      const c = word[i];
      if (c === ".") {
        for (let j = 0; j < 26; j++) {
          if (cur.children[j] && cur.children[j]._searchHelper(word, i + 1)) {
            return true;
          }
        }
        return false;
      }
      const index = c.charCodeAt(0) - 97;
      if (!cur.children[index]) return false;
      cur = cur.children[index];
    }
    return cur !== null && cur.isEndOfWord;
  }
}

// Map-Based
class TrieNode {
  constructor() {
    this.children = new Map(); // key: character, value: TrieNode
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    return this._dfs(word, 0, this.root);
  }

  _dfs(word, index, node) {
    if (index === word.length) {
      return node.isEndOfWord;
    }

    const char = word[index];

    if (char === ".") {
      for (const child of node.children.values()) {
        if (this._dfs(word, index + 1, child)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children.has(char)) return false;
      return this._dfs(word, index + 1, node.children.get(char));
    }
  }
}
