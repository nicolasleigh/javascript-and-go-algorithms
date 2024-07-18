package main

import s "github.com/NicolasLeigh/algorithms/structures"

type ListNode = s.ListNode

func deleteDuplicates(head *ListNode) *ListNode {
	// Create a dummy node to handle cases where the head itself is a duplicate
	dummy := &ListNode{Next: head}
	pre := dummy
	cur := head

	for cur != nil {
		// Move cur to the last duplicate node
		for cur.Next != nil && cur.Val == cur.Next.Val {
			cur = cur.Next
		}
		// If pre's next is cur, move pre forward
		if pre.Next == cur {
			pre = pre.Next
		} else {
			// Otherwise, remove duplicates by skipping nodes
			pre.Next = cur.Next
		}
		// Move cur to the next distinct node
		cur = cur.Next
	}

	return dummy.Next
}
