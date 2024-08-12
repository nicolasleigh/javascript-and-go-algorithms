package main

import "fmt"

const mod = 1e9 + 7

func findPaths(m, n, maxMove, startRow, startColumn int) int {
	dp := make([][][]int, m)
	for i := range dp {
		dp[i] = make([][]int, n)
		for j := range dp[i] {
			dp[i][j] = make([]int, maxMove+1)
			for k := range dp[i][j] {
				dp[i][j][k] = -1
			}
		}
	}
	return helper(maxMove, startRow, startColumn, m, n, dp)
}

func helper(maxMove, x, y, m, n int, dp [][][]int) int {
	if x < 0 || x >= m || y < 0 || y >= n {
		return 1
	}
	if maxMove <= 0 {
		return 0
	}
	if dp[x][y][maxMove] != -1 {
		return dp[x][y][maxMove]
	}
	res := 0
	res = (res + helper(maxMove-1, x+1, y, m, n, dp)) % mod
	res = (res + helper(maxMove-1, x, y-1, m, n, dp)) % mod
	res = (res + helper(maxMove-1, x-1, y, m, n, dp)) % mod
	res = (res + helper(maxMove-1, x, y+1, m, n, dp)) % mod

	dp[x][y][maxMove] = res
	return res
}

func main() {
	// Example usage
	m, n, maxMove, startRow, startColumn := 1, 3, 3, 0, 1
	fmt.Println(findPaths(m, n, maxMove, startRow, startColumn)) // Output: 12
}
