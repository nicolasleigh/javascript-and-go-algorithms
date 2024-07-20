// https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/603423/python-recursion-stack-thinking-process-diagram/
package main

import (
	"fmt"
	"math"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// maxPathSum calculates the maximum path sum in a binary tree.
func maxPathSum(root *TreeNode) int {
	maxPath := math.MinInt64
	getMaxGain(root, &maxPath)
	return maxPath
}

func getMaxGain(node *TreeNode, maxPath *int) int {
	if node == nil {
		return 0
	}

	// Calculate the maximum gain from left and right subtrees.
	gainOnLeft := max(getMaxGain(node.Left, maxPath), 0)
	gainOnRight := max(getMaxGain(node.Right, maxPath), 0)

	// Calculate the current max path including the current node.
	currentMaxPath := node.Val + gainOnLeft + gainOnRight

	// Update the overall max path sum if the current path is greater.
	*maxPath = max(*maxPath, currentMaxPath)

	// Return the max gain if continuing from the current node.
	return node.Val + max(gainOnLeft, gainOnRight)
}

func main() {
	// Example usage:
	// Creating a binary tree:
	//        -10
	//       /  \
	//      9   20
	//         /  \
	//        15   7
	root := &TreeNode{Val: -10}
	root.Left = &TreeNode{Val: 9}
	root.Right = &TreeNode{Val: 20}
	root.Right.Left = &TreeNode{Val: 15}
	root.Right.Right = &TreeNode{Val: 7}

	fmt.Println(maxPathSum(root)) // Output: 42
}
