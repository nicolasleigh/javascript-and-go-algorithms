function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// 21. Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1); // Dummy node to simplify the merge
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach the remaining list (one of them is null at this point)
  current.next = l1 ? l1 : l2;

  return dummy.next; // Skip the dummy node and return the real head
}
