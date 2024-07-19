package main

// 解法二 最原始的方法，辅助空间 O(n^2)
func minPathSum(grid [][]int) int {
	m, n := len(grid), len(grid[0])

	dp := make([][]int, m)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	dp[0][0] = grid[0][0]

	// initFirstCol
	for i := 1; i < len(dp); i++ {
		dp[i][0] = grid[i][0] + dp[i-1][0]
	}
	// initFirstRow
	for i := 1; i < len(dp[0]); i++ {
		dp[0][i] = grid[0][i] + dp[0][i-1]
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
		}
	}

	return dp[m-1][n-1]
}
