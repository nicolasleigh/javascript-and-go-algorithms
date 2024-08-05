package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func pathSum(root *TreeNode, target int) int {
	if root == nil {
		return 0
	}

	numOfPaths := 0
	// Perform DFS starting from the root
	dfs(root, target, &numOfPaths)

	return numOfPaths
}

// dfs performs Depth-First Search traversal on the binary tree
func dfs(node *TreeNode, target int, numOfPaths *int) {
	if node == nil {
		return
	}

	// Test the current node
	test(node, target, numOfPaths)

	// Recursively traverse left and right subtrees
	dfs(node.Left, target, numOfPaths)
	dfs(node.Right, target, numOfPaths)
}

// test checks for paths from the current node that sum up to the target
func test(node *TreeNode, target int, numOfPaths *int) {
	if node == nil {
		return
	}

	if node.Val == target {
		*numOfPaths++
	}

	// Recursively check left and right subtrees with adjusted target
	test(node.Left, target-node.Val, numOfPaths)
	test(node.Right, target-node.Val, numOfPaths)
}

func main() {
	// Example usage
	root := &TreeNode{
		Val: 10,
		Left: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val: 3,
				Left: &TreeNode{
					Val:   3,
					Left:  nil,
					Right: nil,
				},
				Right: &TreeNode{
					Val:   -2,
					Left:  nil,
					Right: nil,
				},
			},
			Right: &TreeNode{
				Val:  2,
				Left: nil,
				Right: &TreeNode{
					Val:   1,
					Left:  nil,
					Right: nil,
				},
			},
		},
		Right: &TreeNode{
			Val:  -3,
			Left: nil,
			Right: &TreeNode{
				Val:   11,
				Left:  nil,
				Right: nil,
			},
		},
	}

	target := 8
	result := pathSum(root, target)
	fmt.Println("Number of paths:", result) // Output: 3
}
