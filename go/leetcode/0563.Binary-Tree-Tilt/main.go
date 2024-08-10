package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func findTilt(root *TreeNode) int {
	res := 0
  postorder(root, &res)
	return res
}

func postorder(node *TreeNode, res *int) int {
	if node == nil {
		return 0
	}
  left :=	postorder(node.Left, res)
	right := postorder(node.Right, res)
	*res += abs(left - right)
	return node.Val + left + right
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}