package main

import (
	"math"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func findFrequentTreeSum(root *TreeNode) []int {
	mp := map[int]int{}
	res := []int{}
	maxv := math.MinInt32
	dfs(root, mp)
	for _, v := range mp {
		maxv = max(maxv, v)
	}
	for k, v := range mp {
		if v == maxv {
			res = append(res, k)
		}
	}
	return res
}

func dfs(node *TreeNode, mp map[int]int) int {
	if node == nil {
		return 0
	}
	leftSum := dfs(node.Left, mp)
	rightSum := dfs(node.Right, mp)
	sum := node.Val + leftSum + rightSum
	mp[sum]++
	return sum
}
