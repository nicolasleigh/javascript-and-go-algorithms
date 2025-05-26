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
 * @return {number}
 */

// BFS
var findBottomLeftValue = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let length = queue.length; // important to store the length of the queue
    let level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result.at(-1)[0]; // return the first element of the last level
};
