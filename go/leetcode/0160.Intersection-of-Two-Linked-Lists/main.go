package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

func getListLen(head *ListNode) int {
	len := 0
	cur := head
	for cur != nil {
		len++
		cur = cur.Next
	}
	return len
}

func getIntersectionNode1(headA, headB *ListNode) *ListNode {
	lenA := getListLen(headA)
	lenB := getListLen(headB)

	var curA, curB *ListNode
	if lenA < lenB {
		curA, curB = headB, headA
		lenA, lenB = lenB, lenA
	} else {
		curA, curB = headA, headB
	}

	for i := 0; i < lenA-lenB; i++ {
		curA = curA.Next
	}

	for curA != nil && curA != curB {
		curA = curA.Next
		curB = curB.Next
	}

	return curA
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
	a, b := headA, headB

	for a != b {
		if a != nil {
			a = a.Next
		} else {
			a = headB
		}

		if b != nil {
			b = b.Next
		} else {
			b = headA
		}
	}

	return a
}

func main() {
	// Example usage:
	// Creating the linked lists for testing
	common := &ListNode{8, &ListNode{4, &ListNode{5, nil}}}
	headA := &ListNode{4, &ListNode{1, common}}
	headB := &ListNode{5, &ListNode{6, &ListNode{1, common}}}

	intersection := getIntersectionNode(headA, headB)
	if intersection != nil {
		fmt.Println(intersection.Val) // Output: 8
	} else {
		fmt.Println("No intersection")
	}
}
