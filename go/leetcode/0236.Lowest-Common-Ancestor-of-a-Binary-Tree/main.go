package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// lowestCommonAncestor finds the lowest common ancestor of two nodes in a binary tree.
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// Base case, if root == nil, return nil
	if root == nil || root == p || root == q {
		return root
	}

	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)

	// When left == nil && right == nil, also return nil
	if left != nil {
		if right != nil {
			return root
		}
		return left
	}
	return right
}

func main() {
	// Create an example binary tree:
	//      3
	//     / \
	//    5   1
	//   / \ / \
	//  6  2 0  8
	//    / \
	//   7   4
	root := &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val: 6,
			},
			Right: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 7,
				},
				Right: &TreeNode{
					Val: 4,
				},
			},
		},
		Right: &TreeNode{
			Val: 1,
			Left: &TreeNode{
				Val: 0,
			},
			Right: &TreeNode{
				Val: 8,
			},
		},
	}

	p := root.Left.Right.Left  // Node with value 7
	q := root.Left.Right.Right // Node with value 4

	lca := lowestCommonAncestor(root, p, q)
	fmt.Println("Lowest Common Ancestor:", lca.Val) // Output: 2
}
