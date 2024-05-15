// 106. Construct Binary Tree from Inorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;

  const rootVal = postorder.pop();
  const index = inorder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);

  rootNode.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  rootNode.right = buildTree(inorder.slice(index + 1), postorder.slice(index));
  return rootNode;
};
