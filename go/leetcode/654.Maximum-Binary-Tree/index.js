// 654. Maximum Binary Tree
// https://leetcode.com/problems/maximum-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Preorder traversal
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let maxIndex = 0;
  let maxVal = nums[0];
  for (let i = 1, length = nums.length; i < length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i];
    }
  }
  const rootNode = new TreeNode(maxVal);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return rootNode;
};
