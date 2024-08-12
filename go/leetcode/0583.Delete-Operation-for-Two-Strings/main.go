package main

import "fmt"

// minDistance calculates the minimum distance between two words using dynamic programming
func minDistance(word1, word2 string) int {
	m, n := len(word1), len(word2)

	// Create a 2D slice initialized with 0s
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	// dp[i][j] represents the lengths of longest common subsequences for different substrings of word1 and word2.
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			if word1[i-1] == word2[j-1] {
				// if the ith element of word1 is equal to the jth element of word2
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}

	longestCommonSubsequence := dp[m][n]
	result := m + n - 2*longestCommonSubsequence

	return result
}

func main() {
	// Example usage
	word1 := "sea"
	word2 := "eat"
	fmt.Println(minDistance(word1, word2)) // Output: 2
}
