package main

import (
	"fmt"
	"strings"
)

// Similar to Problem 297: Serialize and Deserialize Binary Tree, but here we do not really need to reconstruct our tree, and using stack is enough. 
// The trick is to add elements one by one and when we see num, #, #, we replace it with #. If we get just one # in the end, return True, else: False. Let us look at the example 9,3,4,#,#,1,#,#,2,#,6,#,#. Let us go through steps:
// We add elements until we have 9, 3, 4, #, #. It means now that 4 is leaf, so let us remove it: we have 9, 3, #.
// Add elements, so we have 9, 3, #, 1, #, #. We have leaf 1, remove it: 9, 3, #, #. Now, we have 3 as leaf as well: remove it: 9, #.
// Add elements 9, #, 2, #, 6, #, # -> 9, #, 2, #, # -> 9, #, # -> #.

func isValidSerialization(preorder string) bool {
	stack := []string{}
	elements := strings.Split(preorder, ",")

	for _, elem := range elements {
		stack = append(stack, elem)

		// Check the top of the stack for two "#" and one non-"#"
		for len(stack) > 2 && stack[len(stack)-1] == "#" && stack[len(stack)-2] == "#" && stack[len(stack)-3] != "#" {
			// Pop the top 3 elements and replace them with a single "#"
			stack = stack[:len(stack)-3]
			stack = append(stack, "#")
		}
	}

	// The final stack should contain exactly one "#"
	return len(stack) == 1 && stack[0] == "#"
}

func main() {
	preorder := "9,3,4,#,#,1,#,#,2,#,6,#,#"
	fmt.Println(isValidSerialization(preorder)) // Output: true
}