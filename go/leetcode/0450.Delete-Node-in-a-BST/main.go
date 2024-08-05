package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// deleteNode removes a node with a given key from the BST
func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if key < root.Val {
		root.Left = deleteNode(root.Left, key)
	} else if key > root.Val {
		root.Right = deleteNode(root.Right, key)
	} else {
		// Node with the key found

		// Case 1: Node has no children (leaf node)
		if root.Left == nil && root.Right == nil {
			return nil
		}

		// Case 2: Node has one child
		if root.Left == nil {
			return root.Right
		}
		if root.Right == nil {
			return root.Left
		}

		// Case 3: Node has two children
		// Find the smallest node in the right subtree (in-order successor)
		minNode := findMin(root.Right)
		root.Val = minNode.Val
		root.Right = deleteNode(root.Right, minNode.Val)
	}

	return root
}

// FindMin finds the node with the minimum value in a subtree
func findMin(node *TreeNode) *TreeNode {
	for node.Left != nil {
		node = node.Left
	}
	return node
}

// Helper function to print the BST in-order (for testing)
func inOrderTraversal(root *TreeNode) {
	if root == nil {
		return
	}
	inOrderTraversal(root.Left)
	fmt.Print(root.Val, " ")
	inOrderTraversal(root.Right)
}

func main() {
	// Example BST:
	//      5
	//     / \
	//    3   6
	//   / \
	//  2   4
	// /
	//1

	root := &TreeNode{
		Val: 5,
		Left: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 1,
				},
			},
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 6,
		},
	}

	fmt.Println("Original BST (in-order):")
	inOrderTraversal(root)
	fmt.Println()

	root = deleteNode(root, 3)

	fmt.Println("BST after deleting node with value 3 (in-order):")
	inOrderTraversal(root)
	fmt.Println()
}
