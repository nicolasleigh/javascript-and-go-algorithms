package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func recoverTree(root *TreeNode) {
	var first *TreeNode
	var second *TreeNode
	var prev *TreeNode

	// In-order traversal to find the two elements
	_, first, second = inorder(prev, first, second, root)

	// Swap the values of the two nodes
	if first != nil && second != nil {
		first.Val, second.Val = second.Val, first.Val
	}
}

func inorder(prev, first, second, root *TreeNode) (*TreeNode, *TreeNode, *TreeNode) {
	if root == nil {
		return prev, first, second
	}

	prev, first, second = inorder(prev, first, second, root.Left)

	// ****** The key logic start ******
	if prev != nil && prev.Val >= root.Val {
		if first == nil {
			// If first element has not been found and prev's value is greater than or equal to current node's value
			first = prev
		}
		// If first element is found and prev's value is greater than or equal to current node's value
		second = root
	}
	// Update prev to the current node
	prev = root
	// ****** The key logic end ******

	prev, first, second = inorder(prev, first, second, root.Right)

	return prev, first, second
}

func main() {
	// Example usage:
	// Construct a BST with swapped nodes
	root := &TreeNode{Val: 3}
	root.Left = &TreeNode{Val: 1}
	root.Right = &TreeNode{Val: 4}
	root.Right.Left = &TreeNode{Val: 2}

	fmt.Println("Before recovery:")
	printInOrder(root)

	recoverTree(root)

	fmt.Println("\nAfter recovery:")
	printInOrder(root)
}

// Helper function to print the in-order traversal of the tree
func printInOrder(root *TreeNode) {
	if root == nil {
		return
	}
	printInOrder(root.Left)
	fmt.Print(root.Val, " ")
	printInOrder(root.Right)
}
