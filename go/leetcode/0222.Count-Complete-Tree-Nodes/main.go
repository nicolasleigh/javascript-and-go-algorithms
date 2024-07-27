package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// countNodes returns the number of nodes in the binary tree rooted at root.
func countNodes1(root *TreeNode) int {
	return getNodeSum(root)
}

// getNodeSum is a recursive helper function that counts the nodes in the binary tree.
func getNodeSum(node *TreeNode) int {
	if node == nil {
		return 0
	}
	leftNum := getNodeSum(node.Left)
	rightNum := getNodeSum(node.Right)
	return leftNum + rightNum + 1
}

// Level order
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}
	queue := []*TreeNode{root}
	count := 0

	for len(queue) > 0 {
		length := len(queue) // Assign queue's length to a variable

		for i := 0; i < length; i++ {
			node := queue[0]
			queue = queue[1:]
			count++
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

	}

	return count
}
