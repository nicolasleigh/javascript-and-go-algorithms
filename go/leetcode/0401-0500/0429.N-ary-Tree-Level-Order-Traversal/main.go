package main

import "fmt"

// Node represents a node in an N-ary tree.
type Node struct {
	Val      int
	Children []*Node
}

// levelOrder performs a level-order traversal of the N-ary tree.
func levelOrder(root *Node) [][]int {
	var result [][]int
	if root == nil {
		return result
	}

	queue := []*Node{root}

	for len(queue) > 0 {
		length := len(queue)
		var temp []int
		for i := 0; i < length; i++ {
			node := queue[0]
			queue = queue[1:] // Dequeue the front node
			temp = append(temp, node.Val)
			queue = append(queue, node.Children...) // Enqueue children
		}
		result = append(result, temp)
	}
	return result
}

func main() {
	// Example usage:
	// Constructing the following tree:
	//       1
	//    /  |  \
	//   3   2   4
	//  / \
	// 5   6

	node5 := &Node{Val: 5}
	node6 := &Node{Val: 6}
	node3 := &Node{Val: 3, Children: []*Node{node5, node6}}
	node2 := &Node{Val: 2}
	node4 := &Node{Val: 4}
	root := &Node{Val: 1, Children: []*Node{node3, node2, node4}}

	result := levelOrder(root)
	fmt.Println(result) // Output: [[1] [3 2 4] [5 6]]
}
