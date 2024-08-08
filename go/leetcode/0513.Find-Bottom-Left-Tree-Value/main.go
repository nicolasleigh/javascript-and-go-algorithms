package main

import (
	"container/list"
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func findBottomLeftValue(root *TreeNode) int {
	res := []int{}
	queue := list.New()
	queue.PushBack(root)

	for queue.Len() > 0 {
		length := queue.Len()
		tmp := []int{}

		for i := 0; i < length; i++ {
			ele := queue.Front()
			node := ele.Value.(*TreeNode)
			queue.Remove(ele)
			tmp = append(tmp, node.Val)

			if node.Left != nil {
				queue.PushBack(node.Left)
			}
			if node.Right != nil {
				queue.PushBack(node.Right)
			}
		}
		res = tmp
	}

	return res[0]
}

func main() {
	// Example usage
	root := &TreeNode{Val: 2}
	root.Left = &TreeNode{Val: 1}
	root.Right = &TreeNode{Val: 3}

	fmt.Println(findBottomLeftValue(root)) // Output should be 1
}
