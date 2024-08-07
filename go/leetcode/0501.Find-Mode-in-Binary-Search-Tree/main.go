package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// findMode finds the mode(s) of the binary search tree
func findMode(root *TreeNode) []int {
	mp := make(map[int]int)
	maxCount := -1
	res := []int{}

	traverseTree(root, mp)

	// Find the maximum frequency
	for _, cnt := range mp {
		if cnt > maxCount {
			maxCount = cnt
		}
	}

	// Collect all keys with the maximum frequency
	for key, cnt := range mp {
		if cnt == maxCount {
			res = append(res, key)
		}
	}

	return res
}

func traverseTree(node *TreeNode, mp map[int]int) {
	if node == nil {
		return
	}
	mp[node.Val]++
	traverseTree(node.Left, mp)
	traverseTree(node.Right, mp)
}

func main() {
	// Example tree:
	//    1
	//     \
	//      2
	//     /
	//    2
	tree := &TreeNode{Val: 1}
	tree.Right = &TreeNode{Val: 2}
	tree.Right.Left = &TreeNode{Val: 2}

	modes := findMode(tree)
	fmt.Println("Modes:", modes) // Output: Modes: [2]
}
