package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func isValidBST(root *TreeNode) bool {
	var arr []int

	inorder(&arr, root)

	for i := 0; i < len(arr)-1; i++ {
		if arr[i] >= arr[i+1] {
			return false
		}
	}
	return true
}

func inorder(arr *[]int, node *TreeNode) {
	if node == nil {
		return
	}

	if node.Left != nil {
		inorder(arr, node.Left)
	}

	*arr = append(*arr, node.Val)

	if node.Right != nil {
		inorder(arr, node.Right)
	}
}

func main() {
	// Example usage:
	root := &TreeNode{Val: 2}
	root.Left = &TreeNode{Val: 1}
	root.Right = &TreeNode{Val: 3}

	fmt.Println(isValidBST(root)) // should output true
}
