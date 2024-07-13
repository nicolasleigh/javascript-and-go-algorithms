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
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Val < l2.Val {
		l1.Next = mergeTwoLists(l1.Next, l2)
		return l1
	} else {
		l2.Next = mergeTwoLists(l1, l2.Next)
		return l2
	}
}

func main() {
	list1, list2 := []int{1,2,4}, []int{1,3,4}
	l1, l2 := s.IntsToList(list1), s.IntsToList(list2)
	l := mergeTwoLists(l1, l2)
	fmt.Println(s.ListToInts(l))
}