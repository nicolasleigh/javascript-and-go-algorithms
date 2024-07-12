package main

import (
	"fmt"
	"slices"
	"strings"
)

func longestCommonPrefix(strs []string) string {
	// Sorting the string by their length
	slices.SortFunc(strs, func(a, b string) int {
		return len(a) - len(b)
	})

	var prefix string
	// Looping through the first string
	for i := 0; i < len(strs[0]); i++ {
		prefix = strs[0][0 : i+1]
		// Looping through the string slice
		for j := 0; j < len(strs); j++ {
			if strings.HasPrefix(strs[j], prefix) {
				continue
			} else {
				return prefix[0:i] // Remove the last character in the prefix string
			}
		}
	}

	return prefix
}

func main() {
	strs := []string{"flower", "flow", "flight"}
	fmt.Println(longestCommonPrefix(strs))
}
