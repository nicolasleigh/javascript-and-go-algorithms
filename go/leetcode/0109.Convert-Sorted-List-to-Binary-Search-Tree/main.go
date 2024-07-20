package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type ListNode = structures.ListNode
type TreeNode  = structures.TreeNode

// sortedListToBST converts a sorted linked list to a height-balanced BST.
func sortedListToBST(head *ListNode) *TreeNode {
	// Convert the linked list to an array.
	var nums []int
	for head != nil {
		nums = append(nums, head.Val)
		head = head.Next
	}
	if len(nums) == 0 {
		return nil
	}
	return createBST(nums)
}

// createBST constructs a height-balanced BST from a sorted array.
func createBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	if len(nums) == 1 {
		return &TreeNode{Val: nums[0]}
	}
	mid := len(nums) / 2
	root := &TreeNode{Val: nums[mid]}
	root.Left = createBST(nums[:mid])
	root.Right = createBST(nums[mid+1:])
	return root
}