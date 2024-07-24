package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}

	rootVal := preorder[0]
	preorder = preorder[1:]
	index := 0
	for i, v := range inorder {
		if v == rootVal {
			index = i
			break
		}
	}
	rootNode := &TreeNode{Val: rootVal}
	// The length of "preorder[:index]" and "inorder[:index]" must be same, because they represent the left sub-tree,
	// so we need to use "preorder[:index]" instead of "preorder", similarly, "preorder[index:]" represents the right sub-tree
	rootNode.Left = buildTree(preorder[:index], inorder[:index])
	rootNode.Right = buildTree(preorder[index:], inorder[index+1:])

	return rootNode
}
