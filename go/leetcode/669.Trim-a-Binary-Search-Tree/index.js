// 669. Trim a Binary Search Tree
// https://leetcode.com/problems/trim-a-binary-search-tree/description/

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (root === null) return null;

  if (root.val >= low && root.val <= high) {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  } else if (root.val < low) {
    root = trimBST(root.right, low, high);
  } else if (root.val > high) {
    root = trimBST(root.left, low, high);
  }
  return root;
};
