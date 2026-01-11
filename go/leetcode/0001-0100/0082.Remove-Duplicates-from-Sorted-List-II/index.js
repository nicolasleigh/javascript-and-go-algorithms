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
// 82. Remove Duplicates from Sorted List II
function deleteDuplicates(head) {
  // Create a dummy node to simplify edge cases (like duplicates at head)
  const dummy = new ListNode(0, head);
  let pre = dummy;
  let cur = head;

  while (cur !== null) {
    // Move cur to the last node of the current duplicate group
    while (cur.next !== null && cur.val === cur.next.val) {
      cur = cur.next;
    }

    // If no duplicates were found (pre.next === cur), move pre forward
    if (pre.next === cur) {
      pre = pre.next;
    } else {
      // Skip all duplicates
      pre.next = cur.next;
    }

    // Move cur forward
    cur = cur.next;
  }

  return dummy.next;
}
