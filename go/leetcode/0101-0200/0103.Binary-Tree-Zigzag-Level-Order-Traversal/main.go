// package main

// import "github.com/NicolasLeigh/algorithms/structures"

// type TreeNode = structures.TreeNode

// func zigzagLevelOrder(root *TreeNode) [][]int {
// 	var result [][]int
// 	flag := true // When flag is true, traverse the level from right to left
// 	if root == nil {
// 		return result
// 	}

// 	queue := []*TreeNode{root}

// 	for len(queue) > 0 {
// 		length := len(queue) // Assign queue's length to a variable
// 		var temp []int

// 		// Traverse the same level
// 		for i := 0; i < length; i++ {
// 			node := queue[0]
// 			queue = queue[1:]
// 			temp = append(temp, node.Val)
// 			if node.Left != nil {
// 				if flag && node.Right != nil {
// 					queue = append(queue, node.Right)
// 				} else {
// 					queue = append(queue, node.Left)
// 				}
// 			}
// 			if node.Right != nil {
// 				if flag && node.Left != nil {
// 					queue = append(queue, node.Left)
// 				} else {
// 					queue = append(queue, node.Right)
// 				}
// 			}
// 		}
// 		// When one level ended, change the flag
// 		flag = !flag

// 		result = append(result, temp)
// 	}

// 	return result
// }

package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func zigzagLevelOrder(root *TreeNode) [][]int {
	var result [][]int
	if root == nil {
		return result
	}

	queue := []*TreeNode{root}
	leftToRight := true

	for len(queue) > 0 {
		levelSize := len(queue)
		level := make([]int, levelSize)

		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]

			index := i
			if !leftToRight {
				index = levelSize - 1 - i
			}
			level[index] = node.Val

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		result = append(result, level)
		leftToRight = !leftToRight
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

	result := zigzagLevelOrder(root)
	fmt.Println(result) // should output [[3], [20, 9], [15, 7]]
}
