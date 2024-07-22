package main

import (
	"fmt"
	"slices"
)

// Function to check if the string can be segmented into words from the dictionary
func wordBreak(s string, wordDict []string) bool {
	dp := make([]bool, len(s)+1)
	dp[0] = true

	// i is faster than j
	for i := 1; i <= len(s); i++ {
		for j := 0; j < i; j++ {
			// Without dp[j]=true constrain, the third case 's="catsandog"' will return true
			if dp[j] && slices.Contains(wordDict, s[j:i]) {
				dp[i] = true
				break
			}
		}
	}

	return dp[len(s)]
}

func main() {
	s := "leetcode"
	wordDict := []string{"leet", "code"}
	result := wordBreak(s, wordDict)
	fmt.Println(result) // Output: true

	s = "applepenapple"
	wordDict = []string{"apple", "pen"}
	result = wordBreak(s, wordDict)
	fmt.Println(result) // Output: true

	s = "catsandog"
	wordDict = []string{"cats", "dog", "sand", "and", "cat"}
	result = wordBreak(s, wordDict)
	fmt.Println(result) // Output: false
}
