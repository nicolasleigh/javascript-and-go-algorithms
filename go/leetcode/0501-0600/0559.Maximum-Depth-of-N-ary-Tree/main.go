package main

type Node struct {
	Val      int
	Children []*Node
}

func maxDepth(root *Node) int {
	if root == nil {
		return 0
	}
	res := 0
	dfs(root, 1, &res)
	return res
}

func dfs(node *Node, count int, res *int) {
	if len(node.Children) == 0 {
		*res = max(*res, count)
		return
	}
	for _, v := range node.Children {
		count++
		dfs(v, count, res)
		count--
	}
}
