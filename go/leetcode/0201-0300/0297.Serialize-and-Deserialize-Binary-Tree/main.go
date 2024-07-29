package main

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/NicolasLeigh/algorithms/structures"
)

type TreeNode = structures.TreeNode

// Codec provides methods to serialize and deserialize a binary tree.
type Codec struct{}

func Constructor() Codec {
	return Codec{}
}

// serialize serializes a binary tree to a single string.
func (c *Codec) serialize(root *TreeNode) string {
	var out strings.Builder
	c.serializeHelper(root, &out)
	return out.String()
}

// serializeHelper is a helper function for serialize.
func (c *Codec) serializeHelper(root *TreeNode, out *strings.Builder) {
	if root != nil {
		out.WriteString(fmt.Sprintf("%d ", root.Val))
		c.serializeHelper(root.Left, out)
		c.serializeHelper(root.Right, out)
	} else {
		out.WriteString("# ")
	}
}

// deserialize deserializes a string to a binary tree.
func (c *Codec) deserialize(data string) *TreeNode {
	in := strings.NewReader(data)
	return c.deserializeHelper(in)
}

// deserializeHelper is a helper function for deserialize.
func (c *Codec) deserializeHelper(in *strings.Reader) *TreeNode {
	var val string
	fmt.Fscan(in, &val)
	if val == "#" {
		return nil
	}
	num, _ := strconv.Atoi(val)
	root := &TreeNode{Val: num}
	root.Left = c.deserializeHelper(in)
	root.Right = c.deserializeHelper(in)
	return root
}

func main() {
	// Your Codec object will be instantiated and called as such:
	// ser := Codec{}
	// deser := Codec{}
	// data := ser.serialize(root)
	// ans := deser.deserialize(data)
	// Use `ans` as your return value.

	// Example usage
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
	}

	ser := Codec{}
	deser := Codec{}
	data := ser.serialize(root)
	fmt.Println("Serialized:", data)

	ans := deser.deserialize(data)
	fmt.Println("Deserialized Root Value:", ans.Val)
}
