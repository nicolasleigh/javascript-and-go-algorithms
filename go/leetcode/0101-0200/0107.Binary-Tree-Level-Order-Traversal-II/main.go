package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// Similar to 0102
func levelOrderBottom(root *TreeNode) [][]int {
	var result [][]int
	if root == nil {
		return result
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		length := len(queue)
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

		result = append([][]int{temp}, result...)
	}

	return result
}
