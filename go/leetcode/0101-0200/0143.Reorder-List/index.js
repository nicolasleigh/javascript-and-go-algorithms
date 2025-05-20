/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next) return;

  const stack = [];
  let temp = head;

  // Push all nodes onto the stack
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }

  let n = stack.length;
  temp = head;

  // Reorder the list
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let next = temp.next;
    let last = stack.pop();

    temp.next = last;
    last.next = next;
    temp = next;
  }

  // Set the next of the last node to null
  temp.next = null;
}
