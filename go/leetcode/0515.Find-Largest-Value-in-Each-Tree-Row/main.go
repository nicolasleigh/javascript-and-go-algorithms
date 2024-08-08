package main

import (
	"container/list"
	"fmt"
	"math"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func largestValues(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	res := []int{}
	queue := list.New()
	queue.PushBack(root)

	for queue.Len() > 0 {
		length := queue.Len()
		maxv := math.MinInt64
		for i := 0; i < length; i++ {
			ele := queue.Front()
			node := ele.Value.(*TreeNode)
			queue.Remove(ele)
			maxv = max(maxv, node.Val)

			if node.Left != nil {
				queue.PushBack(node.Left)
			}
			if node.Right != nil {
				queue.PushBack(node.Right)
			}
		}
		res = append(res, maxv)
	}

	return res
}

func main() {
	// Example usage
	root := &TreeNode{Val: 1}
	root.Left = &TreeNode{Val: 3}
	root.Right = &TreeNode{Val: 2}
	root.Left.Left = &TreeNode{Val: 5}
	root.Left.Right = &TreeNode{Val: 3}
	root.Right.Right = &TreeNode{Val: 9}

	fmt.Println(largestValues(root)) // Output should be [1, 3, 9]
}
