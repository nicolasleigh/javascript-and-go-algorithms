package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// sumOfLeftLeaves calculates the sum of all left leaves
func sumOfLeftLeaves(root *TreeNode) int {
	return dfs(root, false)
}

func dfs(node *TreeNode, isLeft bool) int {
	if node == nil {
		return 0
	}

	if node.Left == nil && node.Right == nil {
		if isLeft {
			return node.Val
		}
		return 0
	}

	leftSum := dfs(node.Left, true)
	rightSum := dfs(node.Right, false)
	return leftSum + rightSum
}

func main() {
	// Example usage
	root := &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 9,
		},
		Right: &TreeNode{
			Val: 20,
			Left: &TreeNode{
				Val: 15,
			},
			Right: &TreeNode{
				Val: 7,
			},
		},
	}

	fmt.Println(sumOfLeftLeaves(root)) // Output: 24 (9 + 15)
}
