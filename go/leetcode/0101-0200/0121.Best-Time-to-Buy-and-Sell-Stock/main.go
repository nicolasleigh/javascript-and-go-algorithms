package main

import "fmt"

// maxProfit calculates the maximum profit that can be achieved from buying and selling stock.
func maxProfit1(prices []int) int {
	l, r := 0, 1 // l is the buying pointer, r is the selling pointer
	maxProfit := 0

	for r < len(prices) {
		if prices[l] < prices[r] {
			profit := prices[r] - prices[l]
			if profit > maxProfit {
				maxProfit = profit
			}
		} else {
			// Update the buying pointer if the current price is lower than the current buying price.
			l = r
		}
		r++
	}
	return maxProfit
}

func maxProfit2(prices []int) int {
	lowestPrice := prices[0]
	profit := 0

	for i := 0; i < len(prices); i++ {
		if prices[i] < lowestPrice {
			lowestPrice = prices[i]
		}
		currentProfit := prices[i] - lowestPrice
		if currentProfit > profit {
			profit = currentProfit
		}
	}

	return profit
}

func maxProfit(prices []int) int {
	// dp[i][0] means the max profit of the (i+1)th day when holding a stock, always negative
  // dp[i][1] means the max profit of the (i+1)th day when not holding a stock
	dp := make([][2]int, len(prices))
	dp[0][0] = -prices[0] // First day's profit when holding a stock
	dp[0][1] = 0          // First day's profit when not holding a stock

	for i := 1; i < len(prices); i++ {
		dp[i][0] = max(dp[i-1][0], -prices[i])                 // Not buying VS buying at the current price
		dp[i][1] = max(dp[i-1][1], prices[i]+dp[i-1][0]) // Not selling VS selling at the current price
	}

	return dp[len(prices)-1][1]
}


func main() {
	// Example usage:
	prices := []int{7, 1, 5, 3, 6, 4}
	fmt.Println(maxProfit(prices)) // Output: 5

	prices2 := []int{7, 6, 4, 3, 1}
	fmt.Println(maxProfit(prices2)) // Output: 0
}
