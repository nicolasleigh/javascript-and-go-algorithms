package main

import "github.com/NicolasLeigh/algorithms/structures"

type ListNode = structures.ListNode

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	if head == nil || left >= right {
		return head
	}
	dummy := &ListNode{Next: head}
	pre := dummy
	// pre point to the node before the left
	for count := 0; pre.Next != nil && count < left-1; count++ {
		pre = pre.Next
	}
	// cur point to the left
	cur := pre.Next
	for i := 0; i < right-left; i++ {
		tmp := pre.Next
		pre.Next = cur.Next
		cur.Next = cur.Next.Next
		pre.Next.Next = tmp
	}
	return dummy.Next
}
