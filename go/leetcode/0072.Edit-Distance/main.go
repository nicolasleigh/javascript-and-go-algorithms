package main

import (
	"fmt"
)

func minDistance(word1 string, word2 string) int {
	m := len(word1)
	n := len(word2)

	// Initialize dp array
	dp := make([][]int, m+1)
	for i := 0; i <= m; i++ {
		dp[i] = make([]int, n+1)
	}

	// transforming word1[0...i-1] into an empty string requires i deletions.
	for i := 1; i <= m; i++ {
		dp[i][0] = i
	}
	// transforming an empty string into word2[0...j-1] requires j insertions.
	for j := 1; j <= n; j++ {
		dp[0][j] = j
	}

	// dp[i][j] means the minimum number of operations required to convert word1[0..i-1] to word2[0..j-1]
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			if word1[i-1] == word2[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = min(dp[i-1][j-1]+1, // replace the character at position i-1 in word1 with the character at position j-1 in word2.
					dp[i-1][j]+1, // delete the character at position i-1 in word1.
					dp[i][j-1]+1) // insert the character at position j-1 in word2 into word1 at position i.
			}
		}
	}

	return dp[m][n]
}

func main() {
	word1 := "horse"
	word2 := "ros"
	result := minDistance(word1, word2)
	fmt.Printf("Minimum edit distance between %s and %s is %d\n", word1, word2, result)
}
