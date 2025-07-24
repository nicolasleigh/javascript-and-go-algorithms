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
 * @return {number}
 */
// Prefix Sum + HashMap
var pathSum = function (root, targetSum) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // Base case: empty path sums to 0

  function dfs(node, currentSum) {
    if (!node) return 0;

    currentSum += node.val;

    let pathsEndingHere = prefixSumMap.get(currentSum - targetSum) || 0;

    // Update map with current prefix sum
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

    // Recurse left and right
    let totalPaths = pathsEndingHere + dfs(node.left, currentSum) + dfs(node.right, currentSum);

    // Backtrack: remove the current prefix sum to avoid counting it in the sibling branch
    // root = [1,-2,-3] targetSum = -1, output should be 1. If we don't remove the current branch prefix sum, output will be 2.
    prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);

    return totalPaths;
  }

  return dfs(root, 0);
};

// Brute-force DFS
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  // Count paths that start from the current node
  function dfs(node, sum) {
    if (!node) return 0;

    let count = 0;
    if (node.val === sum) count++;

    count += dfs(node.left, sum - node.val);
    count += dfs(node.right, sum - node.val);

    return count;
  }

  // Try each node as a starting point
  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
