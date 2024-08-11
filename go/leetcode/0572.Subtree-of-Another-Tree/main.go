package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// isSubtree checks if the tree rooted at `t` is a subtree of the tree rooted at `s`.
func isSubtree(s, t *TreeNode) bool {
	if s == nil {
		return false
	}
	if isSame(s, t) {
		return true
	}
	return isSubtree(s.Left, t) || isSubtree(s.Right, t)
}

// isSame checks if the tree rooted at `s` is identical to the tree rooted at `t`.
func isSame(s, t *TreeNode) bool {
	if s == nil && t == nil {
		return true
	}
	if s == nil || t == nil {
		return false
	}
	if s.Val != t.Val {
		return false
	}
	return isSame(s.Left, t.Left) && isSame(s.Right, t.Right)
}

func main() {
	// Example usage
	s := &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 4,
			Left: &TreeNode{
				Val: 1,
			},
			Right: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 5,
				},
			},
		},
		Right: &TreeNode{
			Val: 5,
		},
	}

	t := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 1,
		},
		Right: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 5,
			},
		},
	}

	result := isSubtree(s, t)
	fmt.Println(result) // Output: true
}
