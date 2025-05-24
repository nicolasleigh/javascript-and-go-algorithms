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

// Solution 2
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  let sum = 0;

  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }

  sum += sumOfLeftLeaves(root.left);
  sum += sumOfLeftLeaves(root.right);

  return sum;
};
