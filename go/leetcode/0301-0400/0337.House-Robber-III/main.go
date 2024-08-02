package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func rob(root *TreeNode) int {
	notRobThis, robThis := dfs(root)
	return max(notRobThis, robThis)
}

func dfs(node *TreeNode) (int, int) {
	if node == nil {
		return 0, 0
	}

	leftNotRob, leftRob := dfs(node.Left)
	rightNotRob, rightRob := dfs(node.Right)

	// If we don't rob this node, we can take the maximum of robbing or not robbing its children
	notRobThis := max(leftNotRob, leftRob) + max(rightNotRob, rightRob)

	// If we rob this node, we can't rob its immediate children
	robThis := node.Val + leftNotRob + rightNotRob

	return notRobThis, robThis
}

func main() {
	// Example binary tree: [3, 2, 3, nil, 3, nil, 1]
	root := &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 2,
			Right: &TreeNode{
				Val: 3,
			},
		},
		Right: &TreeNode{
			Val: 3,
			Right: &TreeNode{
				Val: 1,
			},
		},
	}

	fmt.Println(rob(root)) // Output: 7
}
