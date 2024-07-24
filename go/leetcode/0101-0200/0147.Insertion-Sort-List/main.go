package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// Function to perform insertion sort on the linked list
func insertionSortList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	dummy := &ListNode{Val: 0, Next: nil}
	cur, pre := head, dummy
	for cur != nil {
		next := cur.Next
		// If the current node is greater than the pre.Next node, in this case, the current node cannot be the first node,
		// so we need to move the pre pointer to the right position and make the current node become the pre.Next node.
		for pre.Next != nil && pre.Next.Val < cur.Val {
			pre = pre.Next
		}
		// If the current node is less than the pre.Next node, make the current node become the pre.Next node(aka the first node).
		cur.Next = pre.Next
		pre.Next = cur
		pre = dummy // Reset pre, make it point to the dummy head
		cur = next
	}
	return dummy.Next
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

func main() {
	head := createList([]int{4, 2, 1, 3})
	fmt.Println("Original list:")
	printList(head)

	sortedList := insertionSortList(head)

	fmt.Println("Sorted list:")
	printList(sortedList)
}
