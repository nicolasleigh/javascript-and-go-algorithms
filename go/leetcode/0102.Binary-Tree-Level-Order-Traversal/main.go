package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

// TreeNode represents a node in the binary tree
type TreeNode = structures.TreeNode

func levelOrder(root *TreeNode) [][]int {
	var result [][]int
	if root == nil {
		return result
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		length := len(queue) // Assign queue's length to a variable
		var temp []int

		for i := 0; i < length; i++ {
			node := queue[0]
			queue = queue[1:]
			temp = append(temp, node.Val)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		result = append(result, temp)
	}

	return result
}

func main() {
	// Example usage:
	root := &TreeNode{Val: 3}
	root.Left = &TreeNode{Val: 9}
	root.Right = &TreeNode{Val: 20}
	root.Right.Left = &TreeNode{Val: 15}
	root.Right.Right = &TreeNode{Val: 7}

	result := levelOrder(root)
	fmt.Println(result) // should output [[3], [9, 20], [15, 7]]
}
