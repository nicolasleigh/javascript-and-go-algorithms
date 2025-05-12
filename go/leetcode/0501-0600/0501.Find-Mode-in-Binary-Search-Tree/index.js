// 501. Find Mode in Binary Search Tree
// https://leetcode.com/problems/find-mode-in-binary-search-tree/description/

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
 * @return {number[]}
 */
var findMode = function (root) {
  let map = new Map();
  let maxCount = Number.MIN_SAFE_INTEGER;
  let result = [];

  const traversal = function (root) {
    root.left && traversal(root.left);
    map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
    root.right && traversal(root.right);
  };

  traversal(root);

  for (let [key, value] of map) {
    if (value > maxCount) {
      result = [];
      maxCount = value;
      result.push(key);
    } else if (value === maxCount) {
      result.push(key);
    }
  }
  return result;
};
