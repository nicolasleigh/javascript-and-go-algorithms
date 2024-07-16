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

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil || k == 0 {
		return head
	}
	newHead := &ListNode{Next: head}
	len := 0
	cur := newHead
	// Move cur to the last node and record the total length of this LinkedList
	for cur.Next != nil {
		len++
		cur = cur.Next
	}
	if (k % len) == 0 {
		return head
	}
	// Let last node point to the first node
	cur.Next = head
	cur = newHead
	// Let cur point to the previous node of the target node
	for i := len - k%len; i > 0; i-- {
		cur = cur.Next
	}
	res := &ListNode{Next: cur.Next}
	cur.Next = nil
	return res.Next
}

func main() {
	l := s.IntsToList([]int{1, 2, 3, 4, 5})
	res := rotateRight(l, 2)
	fmt.Println(s.ListToInts(res))
}
