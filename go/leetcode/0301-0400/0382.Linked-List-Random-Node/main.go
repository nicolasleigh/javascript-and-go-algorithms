package main

import (
	"fmt"
	"math/rand"

	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode

// Solution holds the array representation of the linked list
type Solution struct {
	arr []int
}

// Constructor initializes the Solution with the head of the linked list
func Constructor(head *ListNode) Solution {
	arr := []int{}
	cur := head
	for cur != nil {
		arr = append(arr, cur.Val)
		cur = cur.Next
	}
	return Solution{arr}
}

// GetRandom returns a random node's value from the linked list
func (s *Solution) GetRandom() int {
	return s.arr[rand.Intn(len(s.arr))]
}

func main() {
	// Create a linked list: 1 -> 2 -> 3
	head := &ListNode{Val: 1}
	head.Next = &ListNode{Val: 2}
	head.Next.Next = &ListNode{Val: 3}

	// Initialize the Solution with the linked list
	solution := Constructor(head)

	// Get a random node's value
	fmt.Println(solution.GetRandom()) // Output: could be 1, 2, or 3
}
