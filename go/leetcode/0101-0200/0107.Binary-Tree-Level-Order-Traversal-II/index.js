// 107. Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
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
    result.unshift(level); // unshift instead of push
  }

  return result;
};
