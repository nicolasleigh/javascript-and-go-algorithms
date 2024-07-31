package main

import (
	"fmt"
	"math"
)

func coinChange1(coins []int, amount int) int {
	dp := make([]int, amount+1)
	for i := range dp {
		dp[i] = math.MaxInt32
	}
	dp[0] = 0

	for i := 1; i <= len(coins); i++ {
		for j := 0; j <= amount; j++ {
			if coins[i-1] <= j {
				dp[j] = min(dp[j], dp[j-coins[i-1]]+1) // Don't use coins[i-1] versus use coins[i-1]
			}
		}
	}

	if dp[amount] == math.MaxInt32 {
		return -1
	}
	return dp[amount]
}

func coinChange(coins []int, amount int) int {
	// Create a slice to store the minimum coins needed for each amount
	minCoins := make([]int, amount+1)

	// Initialize the slice with a large number (math.MaxInt32)
	for i := range minCoins {
		minCoins[i] = math.MaxInt32
	}

	// Base case: 0 amount needs 0 coins
	minCoins[0] = 0

	// Fill the minCoins slice
	for i := 1; i <= amount; i++ {
		for _, coin := range coins {
			if i-coin >= 0 {
				minCoins[i] = min(minCoins[i], 1+minCoins[i-coin])
			}
		}
	}

	// Check if it's possible to make the amount with the given coins
	if minCoins[amount] == math.MaxInt32 {
		return -1
	}
	return minCoins[amount]
}

func main() {
	coins := []int{1, 2, 5}
	amount := 11
	fmt.Println(coinChange(coins, amount)) // Output: 3

	coins = []int{2}
	amount = 3
	fmt.Println(coinChange(coins, amount)) // Output: -1
}
