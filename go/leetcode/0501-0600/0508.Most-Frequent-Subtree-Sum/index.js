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
var findFrequentTreeSum = function (root) {
  const freqMap = new Map();
  let maxFreq = 0;

  const postOrder = (node) => {
    if (!node) return 0;

    const leftSum = postOrder(node.left);
    const rightSum = postOrder(node.right);
    const total = node.val + leftSum + rightSum;

    const freq = (freqMap.get(total) || 0) + 1;
    freqMap.set(total, freq);
    maxFreq = Math.max(maxFreq, freq);

    return total;
  };

  postOrder(root);

  const result = [];
  for (const [sum, freq] of freqMap) {
    if (freq === maxFreq) {
      result.push(sum);
    }
  }

  return result;
};
