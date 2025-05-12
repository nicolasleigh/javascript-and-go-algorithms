// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/description/

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
var isSymmetric = function (root) {
  if (root === null) return true;
  function recur(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    let isSym1 = recur(node1.left, node2.right);
    let isSym2 = recur(node1.right, node2.left);
    return isSym1 && isSym2;
  }
  return recur(root.left, root.right);
};
