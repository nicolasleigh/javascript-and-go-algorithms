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
 * @return {number[][]}
 */

function zigzagLevelOrder(root) {
  const result = [];
  if (root === null) return result;

  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // Determine index to insert based on direction
      const index = leftToRight ? i : levelSize - 1 - i;
      level[index] = node.val;

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}
