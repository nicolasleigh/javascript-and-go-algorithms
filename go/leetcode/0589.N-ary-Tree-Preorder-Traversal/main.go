package main

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	res := []int{}
	dfs(root, &res)
	return res
}

func dfs(node *Node, res *[]int) {
	if node == nil {
		return
	}
	*res = append(*res, node.Val)
	for _, v := range node.Children {
		dfs(v, res)
	}
}
