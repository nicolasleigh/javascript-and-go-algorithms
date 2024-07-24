package main

import (
	"fmt"
	"math"
)

// Same idea behind the problem 0123
func maxProfit(k int, prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	buy := make([]int, k+1)
	sell := make([]int, k+1)
	for i := range buy {
		buy[i] = math.MinInt32
	}

	// If k >= n/2, then we can make maximum number of transactions
	if k >= len(prices)/2 {
		profit := 0
		for i := 1; i < len(prices); i++ {
			if prices[i] > prices[i-1] {
				profit += prices[i] - prices[i-1]
			}
		}
		return profit
	}

	// DP to calculate max profit with at most k transactions
	for _, price := range prices {
		for i := 1; i <= k; i++ {
			buy[i] = max(buy[i], sell[i-1]-price)
			sell[i] = max(sell[i], buy[i]+price)
		}
	}

	return sell[k]
}

func main() {
	k := 2
	prices := []int{3, 2, 6, 5, 0, 3}
	fmt.Println(maxProfit(k, prices)) // Output: 7
}
