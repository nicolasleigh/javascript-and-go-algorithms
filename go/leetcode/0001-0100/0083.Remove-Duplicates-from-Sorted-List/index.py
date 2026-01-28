# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def deleteDuplicates(head):
    pre = head
    cur = head

    while cur:
        # Move cur to the last node of the current duplicate group
        while cur.next and cur.val == cur.next.val:
            cur = cur.next

        # Link pre.next to the next distinct node
        pre.next = cur.next

        # Move both pointers forward
        pre = pre.next
        cur = cur.next

    return head

# Solution 2
def deleteDuplicates(head):
    cur = head

    while cur and cur.next:
        if cur.val == cur.next.val:
            # Skip the duplicate
            cur.next = cur.next.next
        else:
            cur = cur.next

    return head
