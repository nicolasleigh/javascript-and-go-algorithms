package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func inorderTraversal(root *TreeNode) []int {
	var result []int
	inorder(&result, root)
	return result
}

func inorder(result *[]int, node *TreeNode) {
	if node == nil {
		return
	}

	if node.Left != nil {
		inorder(result, node.Left)
	}

	*result = append(*result, node.Val)

	if node.Right != nil {
		inorder(result, node.Right)
	}
}

func main() {
	// Example usage:
	// Constructing a binary tree manually for demonstration
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	}

	fmt.Println("Inorder traversal:", inorderTraversal(root)) // Output: [4 2 1 3]
}
