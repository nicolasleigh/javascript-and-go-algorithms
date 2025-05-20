// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head;

  const dummy = new ListNode(0);
  let cur = head;
  let pre = dummy;

  while (cur) {
    let next = cur.next;

    // Find the right place to insert cur
    while (pre.next && pre.next.val < cur.val) {
      pre = pre.next;
    }

    // Insert cur between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;

    // Reset pre and move to next node
    pre = dummy;
    cur = next;
  }

  return dummy.next;
};
