const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line: string) {
  input = line.trim().split(" ").map(Number);
});

rl.on("close", function () {
  class Node {
    val: number;
    next: Node | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
    }
  }

  const n = input[0];
  const headVal = input[1];
  const delVal = input[input.length - 1];

  // 所有节点缓存
  const nodeMap = new Map();

  function getNode(val) {
    if (!nodeMap.has(val)) {
      nodeMap.set(val, new Node(val));
    }
    return nodeMap.get(val);
  }

  // 构建头节点并插入第一个
  const head = getNode(headVal);

  // 插入其余节点
  for (let i = 2; i <= 2 * (n - 1); i += 2) {
    const newVal = input[i];
    const preVal = input[i + 1];
    const preNode = getNode(preVal);
    const newNode = getNode(newVal);

    // 插入到 preNode 后面
    // 需要保持原本的 next 链接不丢失（插入而不是覆盖）
    newNode.next = preNode.next;
    preNode.next = newNode;
  }

  // 删除指定值节点
  const dummy = new Node(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.val === delVal) {
      prev.next = curr.next; // 删除当前节点
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  // 输出链表
  let p = dummy.next;
  const result = [];
  while (p) {
    result.push(p.val);
    p = p.next;
  }

  console.log(result.join(" "));
});
