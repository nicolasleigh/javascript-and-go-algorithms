package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// Similar to 0102, simply change the return value
func maxDepth1(root *TreeNode) int  {
	var result [][]int
	if root == nil {
		return len(result)
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

	return len(result)
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
}