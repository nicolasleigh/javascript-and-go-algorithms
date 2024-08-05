package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// addTwoNumbers adds two numbers represented by linked lists
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// Fill shorter list with leading zeros
	ptr1, ptr2 := l1, l2
	for ptr1 != nil || ptr2 != nil {
		if ptr1 == nil {
			ptr1 = &ListNode{Val: 0, Next: l1}
			l1 = ptr1
			ptr2 = l2 // Reset pointer2, make it point to the head of l2
		} else if ptr2 == nil {
			ptr2 = &ListNode{Val: 0, Next: l2}
			l2 = ptr2
			ptr1 = l1 // Reset pointer1
		} else {
			ptr1 = ptr1.Next
			ptr2 = ptr2.Next
		}
	}

	// Initialize carry and create a dummy node
	var carry int
	dummy := &ListNode{}
	dummy.Next = addTwoDigit(l1, l2, &carry)

	// If there's a carry left, add it to the result
	if carry != 0 {
		newNode := &ListNode{Val: carry}
		newNode.Next = dummy.Next
		dummy.Next = newNode
	}

	return dummy.Next
}

// addTwoDigit recursively adds two numbers represented by linked lists
func addTwoDigit(l1 *ListNode, l2 *ListNode, carry *int) *ListNode {
	if l1 == nil && l2 == nil {
		return nil
	}

	newNode := &ListNode{}
	newNode.Next = addTwoDigit(l1.Next, l2.Next, carry)

	sum := l1.Val + l2.Val + *carry
	newNode.Val = sum % 10
	*carry = sum / 10

	return newNode
}

// Helper function to print the linked list
func PrintList(node *ListNode) {
	for node != nil {
		fmt.Print(node.Val, " ")
		node = node.Next
	}
	fmt.Println()
}

// Example usage
func main() {
	// Example: (7 -> 1 -> 6) + (5 -> 9 -> 2) = (1 -> 3 -> 0 -> 8)
	// l1 := &ListNode{Val: 7, Next: &ListNode{Val: 1, Next: &ListNode{Val: 6}}}
	// l2 := &ListNode{Val: 5, Next: &ListNode{Val: 9, Next: &ListNode{Val: 2}}}
	l1 := &ListNode{Val: 2}
	l2 := &ListNode{Val: 5, Next: &ListNode{Val: 6}}

	result := addTwoNumbers(l1, l2)
	PrintList(result)
}
