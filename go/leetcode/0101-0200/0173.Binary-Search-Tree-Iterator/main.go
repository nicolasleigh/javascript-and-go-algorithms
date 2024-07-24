package main

import (
	"fmt"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

type BSTIterator struct {
	stack []*TreeNode
}

func Constructor(root *TreeNode) BSTIterator {
	it := BSTIterator{}
	it.pushAll(root)
	return it
}

func (this *BSTIterator) HasNext() bool {
	return len(this.stack) > 0
}

// Pop the top node in the stack and push it's right node into stack
func (this *BSTIterator) Next() int {
	tmpNode := this.stack[len(this.stack)-1]
	this.stack = this.stack[:len(this.stack)-1]
	this.pushAll(tmpNode.Right)
	return tmpNode.Val
}

// Push all left node into stack
func (this *BSTIterator) pushAll(node *TreeNode) {
	for node != nil {
		this.stack = append(this.stack, node)
		node = node.Left
	}
}

// Helper function to create a new tree node
func NewTreeNode(val int) *TreeNode {
	return &TreeNode{Val: val}
}

func main() {
	// Example usage
	root := NewTreeNode(7)
	root.Left = NewTreeNode(3)
	root.Right = NewTreeNode(15)
	root.Right.Left = NewTreeNode(9)
	root.Right.Right = NewTreeNode(20)

	iterator := Constructor(root)
	for iterator.HasNext() {
		fmt.Println(iterator.Next())
	}
	fmt.Println(iterator.HasNext())
}
