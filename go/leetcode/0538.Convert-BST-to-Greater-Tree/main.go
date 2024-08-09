package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func convertBST(root *TreeNode) *TreeNode {
	pre := 0
	convert(root, &pre)
	return root
}

func convert(node *TreeNode, pre *int) {
	if node == nil {
		return
	}
	convert(node.Right, pre)
	node.Val += *pre
	*pre = node.Val
	convert(node.Left, pre)
}
