package main

import "fmt"

func longestPalindromeSubseq(s string) int {
	n := len(s)

	// Initialize a 2D slice for DP table
	// dp[i][j] means the longest palindromic subsequence's length in s[i..j]
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	// One character is always a palindrome
	for i := 0; i < n; i++ {
		dp[i][i] = 1
	}

	// Fill the DP table from bottom to top, left to right
	// From bottom to top, from left to right, because dp[i][j] depends on dp[i+1][j-1]
	for i := n - 2; i >= 0; i-- {
		for j := i + 1; j < n; j++ {
			if s[i] == s[j] {
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = max(dp[i][j-1], dp[i+1][j])
			}
		}
	}

	return dp[0][n-1]
}


func main() {
	s := "bbbab"
	fmt.Println(longestPalindromeSubseq(s)) // Output should be 4
}
