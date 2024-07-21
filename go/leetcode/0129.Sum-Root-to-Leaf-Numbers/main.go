package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func sumNumbers(root *TreeNode) int {
	res := 0
	preorder(root, 0, &res)
	return res
}

func preorder(root *TreeNode, sum int, res *int) {
	if root == nil {
		return
	}
	sum = sum*10 + root.Val
	if root.Left == nil && root.Right == nil {
		*res += sum
		return
	}
	preorder(root.Left, sum, res)
	preorder(root.Right, sum, res)
}
