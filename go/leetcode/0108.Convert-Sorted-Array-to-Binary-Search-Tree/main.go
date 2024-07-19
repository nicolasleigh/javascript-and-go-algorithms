package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func sortedArrayToBST(nums []int) *TreeNode {
	return createBST(nums, 0, len(nums)-1)
}

func createBST(nums []int, l int, r int) *TreeNode {
	if l > r {
		return nil
	}

	mid := l + (r-l)/2
	node := &TreeNode{Val: nums[mid]}
	node.Left = createBST(nums, l, mid-1)
	node.Right = createBST(nums, mid+1, r)

	return node
}
