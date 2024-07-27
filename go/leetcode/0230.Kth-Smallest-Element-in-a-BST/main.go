package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// Solution 1
func kthSmallest1(root *TreeNode, k int) int {
	var res []int
	inorder1(root, k, &res)
	return res[k-1]
}

func inorder1(root *TreeNode, k int, res *[]int) {
	if root == nil {
		return
	}
	inorder1(root.Left, k, res)
	*res = append(*res, root.Val)
	inorder1(root.Right, k, res)
}

// Solution 2
func kthSmallest2(root *TreeNode, k int) int {
	var res int
	var count int
	inorder2(root, k, &count, &res)
	return res
}

func inorder2(root *TreeNode, k int, count *int, res *int) {
	if root == nil {
		return
	}
	inorder2(root.Left, k, count, res)
	*count++
	if *count == k {
		*res = root.Val
		return
	}
	inorder2(root.Right, k, count, res)
}

// Solution 3
func kthSmallest(root *TreeNode, k int) int {
	var res int
	inorder(root, &k, &res)
	return res
}

func inorder(root *TreeNode, k *int, res *int) {
	if root == nil {
		return
	}
	inorder(root.Left, k, res)
	*k--
	if *k == 0 {
		*res = root.Val
		return
	}
	inorder(root.Right, k, res)
}

func main() {
	// Create an example binary tree:
	//     4
	//    / \
	//   2   7
	//  / \ / \
	// 1  3 6  9
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
			Val: 7,
			Left: &TreeNode{
				Val: 6,
			},
			Right: &TreeNode{
				Val: 9,
			},
		},
	}

	fmt.Println(kthSmallest(root, 2))
}
