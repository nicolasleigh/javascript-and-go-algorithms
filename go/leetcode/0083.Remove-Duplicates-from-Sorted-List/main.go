package main

import s "github.com/NicolasLeigh/algorithms/structures"

type ListNode = s.ListNode

// Similar to 0082
func deleteDuplicates(head *ListNode) *ListNode {
	pre, cur := head, head
	for cur != nil {
		// Move cur to the last duplicate node
		for cur.Next != nil && cur.Val == cur.Next.Val {
			cur = cur.Next
		}
		pre.Next = cur.Next
		pre = pre.Next
		cur = cur.Next
	}
	return head
}
