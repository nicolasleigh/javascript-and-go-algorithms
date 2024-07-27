package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// lowestCommonAncestor finds the lowest common ancestor of two nodes in a BST.
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	min, max := min(p.Val, q.Val), max(p.Val, q.Val)

	if root.Val > max {
		return lowestCommonAncestor(root.Left, p, q)
	} else if root.Val < min {
		return lowestCommonAncestor(root.Right, p, q)
	} else {
		return root
	}
}

func main() {
	// Create an example BST:
	//      6
	//     / \
	//    2   8
	//   / \ / \
	//  0  4 7  9
	//    / \
	//   3   5
	root := &TreeNode{
		Val: 6,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 0,
			},
			Right: &TreeNode{
				Val: 4,
				Left: &TreeNode{
					Val: 3,
				},
				Right: &TreeNode{
					Val: 5,
				},
			},
		},
		Right: &TreeNode{
			Val: 8,
			Left: &TreeNode{
				Val: 7,
			},
			Right: &TreeNode{
				Val: 9,
			},
		},
	}

	p := root.Left       // Node with value 2
	q := root.Left.Right // Node with value 4

	lca := lowestCommonAncestor(root, p, q)
	fmt.Println("Lowest Common Ancestor:", lca.Val) // Output: 2
}
