// 107. Binary Tree Level Order Traversal II
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/

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
  let result = [];
  let queue = [];
  queue.push(root);
  if (!root) return [];

  while (queue.length) {
    let length = queue.length; // important to store the length of the queue
    let temp = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(temp); // unshift instead of push
  }
  return result;
};
