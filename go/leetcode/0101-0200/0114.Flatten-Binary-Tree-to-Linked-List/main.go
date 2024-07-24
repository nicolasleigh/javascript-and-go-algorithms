package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

func flatten(root *TreeNode) {
	list := preorder(root)
	for i := 1; i < len(list); i++ {
		prev, cur := list[i-1], list[i]
		prev.Left, prev.Right = nil, cur
	}
}

func preorder(root *TreeNode) []*TreeNode {
	if root == nil {
		return nil
	}
	res := []*TreeNode{}
	res = append(res, root)
	res = append(res, preorder(root.Left)...)
	res = append(res, preorder(root.Right)...)
	return res
}
