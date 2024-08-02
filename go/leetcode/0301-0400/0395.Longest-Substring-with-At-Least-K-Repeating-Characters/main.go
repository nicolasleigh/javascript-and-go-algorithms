package main

import (
	"fmt"
)

func longestSubstring(s string, k int) int {
	return recursion(s, k, 0, len(s))
}

func recursion(s string, k, start, end int) int {
	// Base case
	if end-start < k {
		return 0
	}

	count := make([]int, 26)
	for i := start; i < end; i++ {
		count[s[i]-'a']++
	}

	for i := start; i < end; i++ {
		if count[s[i]-'a'] < k {
			left := recursion(s, k, start, i)
			right := recursion(s, k, i+1, end)
			return max(left, right)
		}
	}

	return end - start
}

func main() {
	s := "ababbc"
	k := 2
	result := longestSubstring(s, k)
	fmt.Println(result) // Output: 5
}
