package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func preorderTraversal(root *TreeNode) []int {
	var res []int
	preorder(root, &res)
	return res
}

func preorder(node *TreeNode, res *[]int) {
	if node == nil {
		return
	}

	*res = append(*res, node.Val)

	if node.Left != nil {
		preorder(node.Left, res)
	}
	
	if node.Right != nil {
		preorder(node.Right, res)
	}
}
