// 112. Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  let leftSum = hasPathSum(root.left, targetSum - root.val);
  let rightSum = hasPathSum(root.right, targetSum - root.val);

  return leftSum || rightSum;
};
