package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// Function to reorder the list
func reorderList(head *ListNode) {
	if head == nil || head.Next == nil {
		return
	}

	stack := []*ListNode{}
	temp := head

	// Push all nodes to stack
	for temp != nil {
		stack = append(stack, temp)
		temp = temp.Next
	}

	n := len(stack)
	temp = head

	// Reorder the list
	for i := 0; i < n/2; i++ {
		next := temp.Next
		last := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		temp.Next = last
		last.Next = next
		temp = next
	}

	// Set the next of the last node to nil
	temp.Next = nil
}
