package main

import "fmt"

func change1(amount int, coins []int) int {
	n := len(coins)
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, amount+1)
	}

	dp[0][0] = 1

	for i := 1; i <= n; i++ {
		dp[i][0] = 1
		for j := 1; j <= amount; j++ {
			if j >= coins[i-1] {
				dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}

	return dp[n][amount]
}

// Now we can see that dp[i][j] only rely on dp[i-1][j] and dp[i][j-coins[i]],
// then we can optimize the space by only using one-dimension array.
func change(amount int, coins []int) int {
	dp := make([]int, amount+1)
	dp[0] = 1

	for _, coin := range coins {
		for i := coin; i <= amount; i++ {
			dp[i] += dp[i-coin]
		}
	}

	return dp[amount]
}

func main() {
	coins := []int{1, 2, 5}
	amount := 5
	fmt.Println(change(amount, coins)) // Output should be 4
}

// https://leetcode.com/problems/coin-change-ii/solutions/99212/knapsack-problem-java-solution-with-thinking-process-o-nm-time-and-o-m-space/