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
var countNodes = function (root) {
  const getNodeSum = function (node) {
    if (!node) return 0;

    let leftNum = getNodeSum(node.left);
    let rightNum = getNodeSum(node.right);

    return leftNum + rightNum + 1;
  };

  return getNodeSum(root);
};
