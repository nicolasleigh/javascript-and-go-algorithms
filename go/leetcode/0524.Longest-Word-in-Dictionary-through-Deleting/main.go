package main

import (
	"fmt"
	"slices"
)

func findLongestWord(s string, dictionary []string) string {
	slices.Sort(dictionary)
	maxv := ""
	for _, word := range dictionary {
		if match(s, word) {
			if len(word) > len(maxv) {
				maxv = word
			}
		}
	}
	return maxv
}

func match(s, word string) bool {
	i, j := 0, 0
	for i < len(s) && j < len(word) {
		if s[i] == word[j] {
			i++
			j++
		} else {
			i++
		}
	}
	return j == len(word)
}

func main() {
	// Example usage
	pattern := "ab"
	dictionary := []string{"a", "ab", "abc", "b", "bc"}
	fmt.Println(findLongestWord(pattern, dictionary)) // Output: "ab"
}
