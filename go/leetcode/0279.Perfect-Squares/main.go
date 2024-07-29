package main

import (
	"fmt"
	"math"
)

func numSquares(n int) int {
	items := int(math.Sqrt(float64(n)))
	dp := make([]int, n+1)

	for i := range dp {
		dp[i] = math.MaxInt32
	}

	dp[0] = 0

	for i := 1; i <= items; i++ {
		for j := i * i; j <= n; j++ {
			dp[j] = min(dp[j-i*i]+1, dp[j])
		}
	}

	return dp[n]
}

func main() {
	n := 12
	result := numSquares(n)
	fmt.Println(result) // Output: 3
}
