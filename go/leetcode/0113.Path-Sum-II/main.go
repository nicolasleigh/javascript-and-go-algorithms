package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

// pathSum finds all paths in the binary tree that sum to the targetSum.
func pathSum(root *TreeNode, targetSum int) [][]int {
	var res [][]int
	var cur []int

	if root == nil {
		return res
	}

	traversal(root, targetSum, cur, &res)
	return res
}

func traversal(node *TreeNode, targetSum int, cur []int, res *[][]int) {
	cur = append(cur, node.Val)
	targetSum -= node.Val
	if node.Left == nil && node.Right == nil && targetSum == 0 {
		c := make([]int, len(cur))
		copy(c, cur)
		*res = append(*res, c)
		// cur = cur[:len(cur)-1]
	}
	if node.Left != nil {
		traversal(node.Left, targetSum, cur, res)
	}
	if node.Right != nil {
		traversal(node.Right, targetSum, cur, res)
	}
	// cur = cur[:len(cur)-1]
}
