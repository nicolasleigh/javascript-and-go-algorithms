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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length; // important to store the length of the queue
    let level = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level.at(-1)); // push the last element of the level array
  }
  return result;
};

// BFS
var rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let rightMost = null;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      rightMost = node; // last node in the level
    }

    result.push(rightMost.val);
  }

  return result;
};

// DFS (Preorder, Right First)
var rightSideView = function (root) {
  const result = [];

  const dfs = (node, level) => {
    if (!node) return;
    if (level === result.length) {
      result.push(node.val);
    }

    dfs(node.right, level + 1); // right first
    dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return result;
};
