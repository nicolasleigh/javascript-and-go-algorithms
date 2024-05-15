// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/description/

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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let resPath = [];
  let curPath = [];

  if (root === null) {
    return resPath;
  }

  function traversal(node, count) {
    curPath.push(node.val);
    count -= node.val;
    if (node.left === null && node.right === null && count === 0) {
      resPath.push([...curPath]);
    }
    node.left && traversal(node.left, count);
    node.right && traversal(node.right, count);
    curPath.pop();
  }

  traversal(root, targetSum);
  return resPath;
};
