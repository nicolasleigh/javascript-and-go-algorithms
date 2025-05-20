// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  // Use two-pointer technique to find the middle
  let slow = head;
  let fast = head;
  let temp = null;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Cut the list into two halves
  temp.next = null;

  // Recursively sort each half
  const l1 = sortList(head);
  const l2 = sortList(slow);

  // Merge the sorted halves
  return mergeList(l1, l2);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeList(l1, l2) {
  const dummy = new ListNode(0);
  let cur = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  // Append the remaining nodes
  cur.next = l1 || l2;

  return dummy.next;
}
