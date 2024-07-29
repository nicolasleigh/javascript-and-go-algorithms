package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// removeElements function removes all elements from a linked list that have a specific value
func removeElements(head *ListNode, val int) *ListNode {
	if head == nil {
		return head
	}
	dummy := &ListNode{Val: 0, Next: head}
	pre := dummy
	cur := head
	for cur != nil {
		if cur.Val == val {
			pre.Next = cur.Next
		} else {
			pre = cur
		}
		cur = cur.Next
	}
	return dummy.Next
}

func removeElements1(head *ListNode, val int) *ListNode {
	for head != nil && head.Val == val {
		head = head.Next
	}
	if head == nil {
		return head
	}
	temp := head
	for temp.Next != nil {
		if temp.Next.Val == val {
			temp.Next = temp.Next.Next
		} else {
			temp = temp.Next
		}
	}
	return head
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
	vals := []int{1, 2, 6, 3, 4, 5, 6}
	head := createList(vals)
	fmt.Println("Original list:")
	printList(head)

	val := 6
	head = removeElements(head, val)
	fmt.Println("List after removing elements with value", val, ":")
	printList(head)
}
