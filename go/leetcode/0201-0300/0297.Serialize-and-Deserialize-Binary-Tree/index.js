// Definition for a binary tree node:
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

var serialize = function (root) {
  if (!root) return "null";

  const queue = [root];
  const res = [];

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push("null");
    }
  }

  return res.join(",");
};

var deserialize = function (data) {
  if (data === "null") return null;

  const values = data.split(",");
  const root = new TreeNode(parseInt(values[0]));
  const queue = [root];
  let i = 1;

  while (queue.length) {
    const node = queue.shift();

    if (values[i] !== "null") {
      node.left = new TreeNode(parseInt(values[i]));
      queue.push(node.left);
    }
    i++;

    if (values[i] !== "null") {
      node.right = new TreeNode(parseInt(values[i]));
      queue.push(node.right);
    }
    i++;
  }

  return root;
};
