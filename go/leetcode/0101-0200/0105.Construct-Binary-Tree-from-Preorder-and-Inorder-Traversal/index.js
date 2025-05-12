// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  const rootVal = preorder.shift(); // change from pop() to shift()
  const index = inorder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);

  rootNode.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
  rootNode.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
  return rootNode;
};
