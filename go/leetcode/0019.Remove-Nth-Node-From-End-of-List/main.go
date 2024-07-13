package main

import (
	"fmt"

	s "github.com/NicolasLeigh/algorithms/structures"
)

// ListNode define
type ListNode = s.ListNode

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummyHead := &ListNode{Next: head}
	// Using "dummyHead" instead of "head" to prevent the "nil pointer dereference" error
	slow, fast := dummyHead, dummyHead
	for n > 0 {
		fast = fast.Next
		n--
	}
	for fast.Next != nil {
		fast = fast.Next
		slow = slow.Next
	}
	slow.Next = slow.Next.Next
	return dummyHead.Next
}

func main() {
	// fmt.Println(s.ListToInts(removeNthFromEnd(s.IntsToList([]int{1,2,3,4,5}),2)))
	fmt.Println(s.ListToInts(removeNthFromEnd(s.IntsToList([]int{1}),1)))
}