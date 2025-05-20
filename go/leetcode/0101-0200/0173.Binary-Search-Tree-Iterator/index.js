class BSTIterator {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    this.stack = [];
    this._pushAll(root);
  }

  /**
   * @return {number}
   */
  next() {
    const node = this.stack.pop();
    this._pushAll(node.right);
    return node.val;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.stack.length > 0;
  }

  /**
   * @param {TreeNode} node
   * Push all left descendants onto the stack
   */
  _pushAll(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}

// Prototype-based solution ================
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._pushAll(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = this.stack.pop();
  this._pushAll(node.right);
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

BSTIterator.prototype._pushAll = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
