package main

import "fmt"

func canPartition(nums []int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}

	if sum%2 != 0 {
		return false
	}
	sum /= 2

	n := len(nums)
	dp := make([][]bool, n+1)
	for i := range dp {
		dp[i] = make([]bool, sum+1)
	}

	dp[0][0] = true

	for i := 1; i <= n; i++ {
		dp[i][0] = true
	}

	for j := 1; j <= sum; j++ {
		dp[0][j] = false
	}

	// dp[i][j] means whether the specific sum j can be gotten from the first i numbers.
	for i := 1; i <= n; i++ {
		for j := 1; j <= sum; j++ {
			if j >= nums[i-1] {
				dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}

	return dp[n][sum]
}

func main() {
	// Example usage
	nums := []int{1, 5, 11, 5}
	fmt.Println(canPartition(nums)) // Output: true
}
