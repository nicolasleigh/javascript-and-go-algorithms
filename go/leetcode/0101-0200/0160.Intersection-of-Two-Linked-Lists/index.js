/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  let curA = headA;
  let curB = headB;
  let lenA = getListLen(headA);
  let lenB = getListLen(headB);

  // Ensure curA is always the longer list
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let i = lenA - lenB;
  while (i--) {
    curA = curA.next;
  }

  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};

function getListLen(head) {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
}

// Approach 2
var getIntersectionNode2 = function (headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
