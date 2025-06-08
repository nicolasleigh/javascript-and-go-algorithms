// 108. Convert Sorted Array to Binary Search Tree
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
var sortedArrayToBST = function (nums) {
  return createBST(nums, 0, nums.length - 1);
};

function createBST(nums, l, r) {
  if (l > r) return null;

  let mid = Math.floor(l + (r - l) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = createBST(nums, l, mid - 1);
  node.right = createBST(nums, mid + 1, r);

  return node;
}
