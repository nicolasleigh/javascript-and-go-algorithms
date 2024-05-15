// 404. Sum of Left Leaves
// https://leetcode.com/problems/sum-of-left-leaves/description/

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
var sumOfLeftLeaves = function (root) {
  return dfs(root, false);
};

function dfs(node, isLeft) {
  if (node === null) return 0;

  if (node.left === null && node.right === null) {
    return isLeft ? node.val : 0;
  }

  let leftSum = dfs(node.left, true);
  let rightSum = dfs(node.right, false);
  return leftSum + rightSum;
}
