"""
Key Points:
Uses a dummy node to handle edge cases (e.g., removing the head).
fast pointer is moved n steps ahead first.
Then both pointers move together until fast reaches the last node.
slow.next points to the node that needs to be removed.
Time complexity: O(L) where L is the length of the list.
Space complexity: O(1)
"""

# 19. Remove Nth Node From End of List
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    dummy = ListNode(0)
    dummy.next = head
    slow = dummy
    fast = dummy

    # Move fast pointer n steps ahead
    while n > 0:
        fast = fast.next
        n -= 1

    # Move both pointers until fast reaches the end
    while fast.next:
        slow = slow.next
        fast = fast.next

    # Remove the nth node from the end
    slow.next = slow.next.next

    return dummy.next

# Two-pass approach (length − n)
def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    dummy = ListNode(0)
    dummy.next = head

    # 1. Calculate length
    length = 0
    curr = head
    while curr:
        length += 1
        curr = curr.next

    # 2. Move to (length - n)th node
    curr = dummy
    for _ in range(length - n):
        curr = curr.next

    # 3. Remove the target node
    curr.next = curr.next.next

    return dummy.next
