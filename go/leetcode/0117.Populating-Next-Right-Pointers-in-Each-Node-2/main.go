package main

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

// Same as 0116
func connect(root *Node) *Node {
	if root == nil {
		return root
	}

	queue := []*Node{root}

	for len(queue) > 0 {
		length := len(queue)
		var prev *Node

		for i := 0; i < length; i++ {
			var curr *Node
			if i == 0 {
				prev = queue[0]
				queue = queue[1:]
			} else {
				curr = queue[0]
				queue = queue[1:]
				prev.Next = curr
				prev = curr
			}
			if prev.Left != nil {
				queue = append(queue, prev.Left)
			}
			if prev.Right != nil {
				queue = append(queue, prev.Right)
			}
		}
		prev.Next = nil
	}
	return root
}
