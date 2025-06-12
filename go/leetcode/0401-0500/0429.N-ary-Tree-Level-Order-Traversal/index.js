/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let queue = [];
  queue.push(root);
  if (!root) return [];

  while (queue.length) {
    let length = queue.length; // important to store the length of the queue
    let level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.children) queue.push(...node.children); // spread the children array
    }
    result.push(level);
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.children) queue.push(...node.children); // spread the children array
    }

    result.push(level);
  }

  return result;
};
