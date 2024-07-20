package main

import "fmt"

// dp[i][j] represents the number of distinct subsequences of the first i characters of s that equal the first j characters of t.
func numDistinct(s string, t string) int {
	dp := make([][]int, len(s)+1)
	for i := range dp {
		dp[i] = make([]int, len(t)+1)
	}

	// If t is empty, there is exactly one subsequence of s that matches t (the empty subsequence). Hence, dp[i][0] = 1 for all i.
	// If s is empty but t is not, no subsequences of s can match t. Hence, dp[0][j] = 0 for all j > 0.
	for i := 0; i <= len(s); i++ {
		dp[i][0] = 1
	}

	// If s[i-1] == t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the sum of:
	// 1) The number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).
	// 2) The number of ways to form t[0..j-2] from s[0..i-2] (including the current character of s).
	// If s[i-1] != t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the same as
	// the number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).
	for i := 1; i <= len(s); i++ {
		for j := 1; j <= len(t); j++ {
			if s[i-1] == t[j-1] {
				dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}

	return dp[len(s)][len(t)]
}

func main() {
	// Example usage:
	s := "rabbbit"
	t := "rabbit"
	fmt.Println(numDistinct(s, t)) // Output: 3

	s2 := "babgbag"
	t2 := "bag"
	fmt.Println(numDistinct(s2, t2)) // Output: 5
}
