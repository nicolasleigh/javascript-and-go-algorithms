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
var averageOfLevels = function (root) {
  let result = [];
  let queue = [];
  queue.push(root);
  if (!root) return [];

  while (queue.length) {
    let length = queue.length; // important to store the length of the queue
    let temp = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    let avg = temp.reduce((acc, cur) => acc + cur, 0) / temp.length; // calculate the average of the temp array
    result.push(avg);
  }
  return result;
};

var averageOfLevels = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / levelSize);
  }

  return result;
};
