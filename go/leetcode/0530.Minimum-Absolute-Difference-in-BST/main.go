package main

import (
	"fmt"
	"math"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// getMinimumDifference finds the minimum absolute difference between values of any two nodes in the BST.
func getMinimumDifference(root *TreeNode) int {
	minv, temp := math.MaxInt32, []int{}
	inorder(root, &temp)
	// Find the minimum difference between consecutive elements in the sorted array
	for i := 0; i < len(temp)-1; i++ {
		dif := temp[i+1] - temp[i]
		minv = min(minv, dif)
	}
	return minv
}

func inorder(node *TreeNode, temp *[]int) {
	if node == nil {
		return
	}
	inorder(node.Left, temp)
	*temp = append(*temp, node.Val)
	inorder(node.Right, temp)
}

func main() {
	// Example usage
	root := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 1,
			},
			Right: &TreeNode{
				Val: 3,
			},
		},
		Right: &TreeNode{
			Val: 6,
		},
	}

	fmt.Println(getMinimumDifference(root)) // Output: 1
}
