// 257. Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = [];

  function preOrder(node, currPath) {
    if (!node) return;

    currPath.push(node.val);
    if (node.left == null && node.right == null) {
      paths.push([...currPath]);
    }
    preOrder(node.left, [...currPath]);
    preOrder(node.right, [...currPath]);
  }
  preOrder(root, []);
  return paths.map((path) => path.join("->"));
};

// Solution 2
function binaryTreePaths(root) {
  const paths = [];

  function dfs(node, path) {
    if (!node) return;

    // Add current node value to path
    path += node.val;

    // If it's a leaf, add the complete path
    if (!node.left && !node.right) {
      paths.push(path);
      return;
    }

    // If not a leaf, continue DFS with '->' separator
    path += "->";
    dfs(node.left, path);
    dfs(node.right, path);
  }

  dfs(root, "");
  return paths;
}
