package main

import "github.com/NicolasLeigh/algorithms/structures"

type TreeNode = structures.TreeNode

// mergeTrees merges two binary trees and returns the merged tree.
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	if root1 == nil {
		return root2
	}
	if root2 == nil {
		return root1
	}

	// Create a new tree node with the sum of the two root values.
	resNode := &TreeNode{Val: root1.Val + root2.Val}
	// Recursively merge the left and right subtrees.
	resNode.Left = mergeTrees(root1.Left, root2.Left)
	resNode.Right = mergeTrees(root1.Right, root2.Right)

	return resNode
}