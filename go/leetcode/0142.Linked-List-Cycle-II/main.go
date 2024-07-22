package main

import "github.com/NicolasLeigh/algorithms/structures"

// ListNode definition
type ListNode = structures.ListNode

// The steps from the head of the list to the first point in the cycle as x1, the steps from the first point of the cycle to the meeting point as x2,
// and the steps from the meeting point back to the first point of the cycle as x3. Then the total length of the cycle is  x2 + x3  steps.
// the time of the fast = (x1 + x2 + x3 + x2) / 2
// the time of the slow = (x1 + x2) / 1
// and x1 + x2 + x3 + x2 = 2 * (x1 + x2)
// so x1 = x3
// When fast and slow first meet, move the fast to the head, every time fast and slow move one step, when they meet again, both point to the first node of the cycle.
func detectCycle(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			fast = head
			for slow != fast {
				slow = slow.Next
				fast = fast.Next
			}
			return slow
		}
	}
	return nil
}
