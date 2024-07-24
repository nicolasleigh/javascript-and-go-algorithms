package main

import (
	"fmt"
	"slices"
	"strings"
)

// reverseWords reverses the words in a string
func reverseWords(s string) string {
	// Trim the input string to remove leading and trailing spaces
	s = strings.TrimSpace(s)
	// Split the trimmed string into words based on spaces
	words := strings.Fields(s)
	slices.Reverse(words)
	res := strings.Join(words, " ")
	return res
}

func main() {
	s := "  hello world  "
	fmt.Println("Original string:", s)
	fmt.Println("Reversed words string:", reverseWords(s)) // Output: "world hello"

	s = "a good   example"
	fmt.Println("Original string:", s)
	fmt.Println("Reversed words string:", reverseWords(s)) // Output: "example good a"

	s = "  Bob    Loves  Alice   "
	fmt.Println("Original string:", s)
	fmt.Println("Reversed words string:", reverseWords(s)) // Output: "Alice Loves Bob"

	s = "Alice does not even like bob"
	fmt.Println("Original string:", s)
	fmt.Println("Reversed words string:", reverseWords(s)) // Output: "bob like even not does Alice"
}
