package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	invertTree(root.Left)
	invertTree(root.Right)
	root.Left, root.Right = root.Right, root.Left
	return root
}

// Helper function to print the tree (in-order traversal)
func printTree(root *TreeNode) {
	if root != nil {
		printTree(root.Left)
		fmt.Print(root.Val, " ")
		printTree(root.Right)
	}
}

func main() {
	// Create an example binary tree:
	//     4
	//    / \
	//   2   7
	//  / \ / \
	// 1  3 6  9
	root := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 1,
			},
			Right: &TreeNode{
				Val: 3,
			},
		},
		Right: &TreeNode{
			Val: 7,
			Left: &TreeNode{
				Val: 6,
			},
			Right: &TreeNode{
				Val: 9,
			},
		},
	}

	fmt.Println("Original tree (in-order traversal):")
	printTree(root)
	fmt.Println()

	invertedRoot := invertTree(root)

	fmt.Println("Inverted tree (in-order traversal):")
	printTree(invertedRoot)
	fmt.Println()
}
