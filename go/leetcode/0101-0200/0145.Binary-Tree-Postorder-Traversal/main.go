package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func postorderTraversal(root *TreeNode) []int {
	var res []int
	postorder(root, &res)
	return res
}

func postorder(root *TreeNode, res *[]int) {
	if root == nil {
		return
	}

	if root.Left != nil {
		postorder(root.Left, res)
	}

	if root.Right != nil {
		postorder(root.Right, res)
	}

	*res = append(*res, root.Val)
}
