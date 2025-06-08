// 110. Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getDepth(node) {
    if (node === null) return 0;
    let leftDepth = getDepth(node.left);
    if (leftDepth === -1) return -1;
    let rightDepth = getDepth(node.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return getDepth(root) !== -1;
};

// Solution 2
// Main function to check if the tree is balanced
var isBalanced = function (root) {
  if (!root) return true;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

// Helper function to get the depth of a tree (same as problem 104)
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
