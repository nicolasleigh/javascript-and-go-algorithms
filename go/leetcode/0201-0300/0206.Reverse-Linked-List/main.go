package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// reverseList function reverses a singly linked list
func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	var next *ListNode
	cur := head
	for cur != nil {
		next = cur.Next
		cur.Next = prev
		prev = cur
		cur = next
	}
	return prev
}

// Helper function to print the linked list
func printList(head *ListNode) {
	for head != nil {
		fmt.Printf("%d ", head.Val)
		head = head.Next
	}
	fmt.Println()
}

// Helper function to create a linked list from a slice
func createList(vals []int) *ListNode {
	if len(vals) == 0 {
		return nil
	}
	head := &ListNode{Val: vals[0]}
	current := head
	for _, val := range vals[1:] {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return head
}

func main() {
	// Example usage
	vals := []int{1, 2, 3, 4, 5}
	head := createList(vals)
	fmt.Println("Original list:")
	printList(head)

	head = reverseList(head)
	fmt.Println("Reversed list:")
	printList(head)
}