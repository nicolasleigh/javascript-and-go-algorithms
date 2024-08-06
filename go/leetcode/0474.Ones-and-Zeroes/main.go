package main

import (
	"fmt"
)

// Helper function to find the maximum number of strings that can be formed
func findMaxForm(strs []string, m int, n int) int {
	// Create a 2D slice initialized with zeros
	memo := make([][]int, m+1)
	for i := range memo {
		memo[i] = make([]int, n+1)
	}

	for _, s := range strs {
		numZeroes, numOnes := 0, 0
		// Count number of zeroes and ones in current string
		for _, c := range s {
			if c == '0' {
				numZeroes++
			} else if c == '1' {
				numOnes++
			}
		}

		// Update memo table from bottom right to top left
		// memo[i][j] = the max number of strings that can be formed with i 0's and j 1's
		// from the first few strings up to the current string s
		// Catch: have to go from bottom right to top left
		// Why? If a cell in the memo is updated(because s is selected),
		// we should be adding 1 to memo[i][j] from the previous iteration (when we were not considering s)
		// If we go from top left to bottom right, we would be using results from this iteration => overcounting
		for i := m; i >= numZeroes; i-- {
			for j := n; j >= numOnes; j-- {
				memo[i][j] = max(memo[i][j], memo[i-numZeroes][j-numOnes]+1)
			}
		}
	}

	return memo[m][n]
}

func main() {
	strs := []string{"10", "0001", "111001", "1", "0"} // Example input
	m, n := 5, 3
	fmt.Println(findMaxForm(strs, m, n)) // Output: 4
}
