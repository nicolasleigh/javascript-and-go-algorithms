"""
Explanation:

ListNode class: This defines the structure of a singly linked list node with val and next.

swapPairs function:

First, we handle edge cases where the list is either empty or has just one node, in which case we return the list as it is.

We create a dummy node (dummyHead) that points to the head of the list. This simplifies handling of cases where we swap nodes near the head.

The variable cur starts at dummyHead. We use a while loop to traverse the list, ensuring there are two nodes to swap (cur.next and cur.next.next).

Inside the loop, we swap the nodes:

t1 is the first node to be swapped, and t2 is the second.

After the swap, we adjust the cur pointer to continue checking subsequent pairs.
"""

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def swapPairs(head):
    if not head or not head.next:
        return head

    dummyHead = ListNode(0)
    dummyHead.next = head
    cur = dummyHead

    while cur.next and cur.next.next:
        t1 = cur.next
        t2 = cur.next.next
        cur.next = t2
        t1.next = t2.next
        t2.next = t1
        cur = cur.next.next

    return dummyHead.next
