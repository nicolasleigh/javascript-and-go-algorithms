package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head // If the list is empty or has only one node, return as is
	}

	odd := head       // Initialize odd pointer to the head of the list
	even := head.Next // Initialize even pointer to the second node
	evenHead := even  // Store the start of the even list

	for even != nil && even.Next != nil {
		// Update odd and even pointers to skip one node each
		odd.Next = odd.Next.Next
		even.Next = even.Next.Next
		odd = odd.Next
		even = even.Next
	}

	// Connect the end of the odd list to the start of the even list
	odd.Next = evenHead

	return head // Return the modified list
}

// Helper function to create a linked list from a slice
func createLinkedList(nums []int) *ListNode {
	if len(nums) == 0 {
		return nil
	}
	head := &ListNode{Val: nums[0]}
	current := head
	for _, val := range nums[1:] {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return head
}

// Helper function to print a linked list
func printLinkedList(head *ListNode) {
	current := head
	for current != nil {
		fmt.Print(current.Val, " -> ")
		current = current.Next
	}
	fmt.Println("nil")
}

func main() {
	head := createLinkedList([]int{1, 2, 3, 4, 5})
	printLinkedList(oddEvenList(head)) // Output: 1 -> 3 -> 5 -> 2 -> 4 -> nil
}
