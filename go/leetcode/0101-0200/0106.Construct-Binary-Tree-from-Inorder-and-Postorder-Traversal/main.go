package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func buildTree(inorder []int, postorder []int) *TreeNode {
	if len(postorder) == 0 {
		return nil
	}

	rootVal := postorder[len(postorder)-1]
	postorder = postorder[:len(postorder)-1]
	index := 0
	for i, v := range inorder {
		if v == rootVal {
			index = i
			break
		}
	}
	rootNode := &TreeNode{Val: rootVal}
	// The length of inorder[:index] and postorder[:index] are same,
	// similarly the length of inorder[index+1:] and postorder[index:] are same, because postorder slice already pops it's last element
	rootNode.Left = buildTree(inorder[:index], postorder[:index])
	rootNode.Right = buildTree(inorder[index+1:], postorder[index:])

	return rootNode
}
