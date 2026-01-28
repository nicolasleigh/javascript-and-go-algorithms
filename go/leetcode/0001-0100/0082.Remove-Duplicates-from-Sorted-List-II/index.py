# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def deleteDuplicates(head):
    # Dummy node to handle edge cases (duplicates at the head)
    dummy = ListNode(0, head)
    pre = dummy
    cur = head

    while cur:
        # Move cur to the last node of the current duplicate group
        while cur.next and cur.val == cur.next.val:
            cur = cur.next

        # If no duplicates were found
        if pre.next == cur:
            pre = pre.next
        else:
            # Skip all duplicates
            pre.next = cur.next

        # Move cur forward
        cur = cur.next

    return dummy.next
