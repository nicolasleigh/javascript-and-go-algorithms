package main

// Node definition
type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

// Function to copy the linked list with random pointers
func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}

	// Create a map to store the mapping from old nodes to new nodes
	oldToCopy := make(map[*Node]*Node)
	oldToCopy[nil] = nil

	// First pass: Create a copy of each node and store it in the map
	cur := head
	for cur != nil {
		copy := &Node{Val: cur.Val}
		oldToCopy[cur] = copy
		cur = cur.Next
	}

	// Second pass: Assign next and random pointers for each copied node
	cur = head
	for cur != nil {
		copy := oldToCopy[cur]
		copy.Next = oldToCopy[cur.Next]
		copy.Random = oldToCopy[cur.Random]
		cur = cur.Next
	}

	return oldToCopy[head]
}
