package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func diameterOfBinaryTree(root *TreeNode) int {
	res := 0
	checkDiameter(root, &res)
	return res
}

func checkDiameter(root *TreeNode, res *int) int {
	if root == nil {
		return 0
	}
	left := checkDiameter(root.Left, res)
	right := checkDiameter(root.Right, res)
	*res = max(*res, left+right)
	return max(left, right) + 1
}
