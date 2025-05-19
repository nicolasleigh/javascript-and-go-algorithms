/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function (head) {
  if (head === null) return null;

  const originalToClone = new Map();
  originalToClone.set(null, null);

  // First pass: copy all nodes and store in map
  let cur = head;
  while (cur !== null) {
    originalToClone.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  // Second pass: assign next and random pointers
  cur = head;
  while (cur !== null) {
    const clone = originalToClone.get(cur);
    clone.next = originalToClone.get(cur.next);
    clone.random = originalToClone.get(cur.random);
    cur = cur.next;
  }

  return originalToClone.get(head);
};
