/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let pre = head;
  let cur = head;

  while (cur !== null) {
    // Move cur to the last node of the current duplicate group
    while (cur.next !== null && cur.val === cur.next.val) {
      cur = cur.next;
    }

    // Link pre.next to the next distinct node
    pre.next = cur.next;

    // Move both pointers forward
    pre = pre.next;
    cur = cur.next;
  }

  return head;
}

// Solution 2
function deleteDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Skip the duplicate
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
