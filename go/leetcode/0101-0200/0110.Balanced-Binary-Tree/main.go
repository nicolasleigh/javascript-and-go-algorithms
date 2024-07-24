package main

import (
	"math"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// isBalanced checks if a binary tree is height-balanced.
func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}
	leftHight := maxDepth(root.Left)
	rightHight := maxDepth(root.Right)
	return math.Abs(float64(leftHight-rightHight)) <= 1 && isBalanced(root.Left) && isBalanced(root.Right)
}

// The same function as in the problem 0104
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
}
