package main

import (
	"fmt"
)

func partition(s string) [][]string {
	var comb []string
	var res [][]string

	backtrack(0, comb, &res, s)
	return res
}

// Backtracking function to find all palindrome partitions
func backtrack(start int, comb []string, res *[][]string, s string) {
	if start == len(s) {
		c := make([]string, len(comb))
		copy(c, comb)
		*res = append(*res, c)
		return
	}

	for i := start; i < len(s); i++ {
		sub := s[start : i+1]
		if isPalindrome(sub) {
			comb = append(comb, sub)
			backtrack(i+1, comb, res, s)
			comb = comb[:len(comb)-1]
		}
	}
}

// Helper function to check if a substring is a palindrome
func isPalindrome(s string) bool {
	i, j := 0, len(s)-1
	for i < j {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}
	return true
}

func main() {
	fmt.Println(partition("aab")) // Output: [["a","a","b"],["aa","b"]]
}
