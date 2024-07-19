// https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/1849266/c-detailed-explanation-recursive-tree-with-comments/
package main

import (
	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func generateTrees(n int) []*TreeNode {
	return buildTree(1, n)
}

func buildTree(start, end int) []*TreeNode {
	var tree []*TreeNode
	if start > end {
		tree = append(tree, nil)
		return tree
	}
	// Iterate through all values from start to end to construct left and right subtree recursively
	for i := start; i <= end; i++ {
		left := buildTree(start, i-1) // Construct left subtree
		right := buildTree(i+1, end)  // Construct right subtree

		// loop through all left and right subtrees and connect them to ith root
		for _, l := range left {
			for _, r := range right {
				root := &TreeNode{Val: i, Left: l, Right: r}
				tree = append(tree, root)
			}
		}
	}
	return tree
}
