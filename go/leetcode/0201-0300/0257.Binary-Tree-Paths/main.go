package main

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

func binaryTreePaths(root *TreeNode) []string {
	var res []string
	preorder(root, &res, []int{})
	return res
}

func preorder(node *TreeNode, res *[]string, path []int) {
	if node == nil {
		return
	}
	path = append(path, node.Val)
	if node.Left == nil && node.Right == nil {
		*res = append(*res, pathToString(path))
	}
	preorder(node.Left, res, path)
	preorder(node.Right, res, path)
}

func pathToString(path []int) string {
	var s []string
	for _, v := range path {
		s = append(s, strconv.Itoa(v))
	}
	return strings.Join(s, "->")
}

func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	}

	paths := binaryTreePaths(root)
	fmt.Println(paths) // Output: ["1->2->5", "1->3"]
}
