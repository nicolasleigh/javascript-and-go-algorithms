package main

import "fmt"

func uniquePaths(m int, n int) int {
	// Initialize dp 2D array
	// dp[i][j] represents the number of unique paths from (0, 0) to (i, j)
	dp := make([][]int, m)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	// Base cases
	// From (0, 0) to (i, 0) or to (0, i), the unique path always 1, because the robot can only move right or down
	for i := 0; i < m; i++ {
		dp[i][0] = 1
	}
	for i := 0; i < n; i++ {
		dp[0][i] = 1
	}

	// Fill dp array
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}

	// m and n are 1-indexed, so the last element will be dp[m-1][n-1]
	return dp[m-1][n-1]
}

func main() {
	m := 3
	n := 7
	fmt.Printf("Number of unique paths from (1,1) to (%d,%d) is: %d\n", m, n, uniquePaths(m, n))
}
