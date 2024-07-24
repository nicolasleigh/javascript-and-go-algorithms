package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// sortList sorts a linked list using merge sort
func sortList(head *ListNode) *ListNode {
	// If list contains a single or 0 nodes
	if head == nil || head.Next == nil {
		return head
	}

	// 2 pointer approach 
	var temp *ListNode
	slow := head
	fast := head

	// Find the middle element
	for fast != nil && fast.Next != nil {
		temp = slow
		slow = slow.Next      // slow increment by 1
		fast = fast.Next.Next // fast increment by 2
	}
	temp.Next = nil // end of first left half

	l1 := sortList(head) // left half recursive call
	l2 := sortList(slow) // right half recursive call

	return mergeList(l1, l2) // mergeList function call
}

// mergeList merges two sorted linked lists
func mergeList(l1, l2 *ListNode) *ListNode {
	dummy := &ListNode{}
	cur := dummy

	for l1 != nil && l2 != nil {
		if l1.Val <= l2.Val {
			cur.Next = l1
			l1 = l1.Next
		} else {
			cur.Next = l2
			l2 = l2.Next
		}
		cur = cur.Next
	}

	// for unequal length linked lists
	if l1 != nil {
		cur.Next = l1
	}

	if l2 != nil {
		cur.Next = l2
	}

	return dummy.Next
}

// Helper function to create a list from a slice of values
func createList(vals []int) *ListNode {
	if len(vals) == 0 {
		return nil
	}

	head := &ListNode{Val: vals[0]}
	temp := head
	for _, val := range vals[1:] {
		temp.Next = &ListNode{Val: val}
		temp = temp.Next
	}

	return head
}

// Helper function to print the list
func printList(head *ListNode) {
	temp := head
	for temp != nil {
		fmt.Printf("%d -> ", temp.Val)
		temp = temp.Next
	}
	fmt.Println("nil")
}

func main() {
	head := createList([]int{4, 2, 1, 3})
	fmt.Println("Original list:")
	printList(head)

	sortedList := sortList(head)

	fmt.Println("Sorted list:")
	printList(sortedList)
}
