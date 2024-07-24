package main

import "math"

func maxProfit(prices []int) int {
	b1 := -prices[0]    // Buy 1
	s1 := math.MinInt32 // Sell 1
	b2 := math.MinInt32 // Buy 2
	s2 := math.MinInt32 // Sell 2

	for i := 1; i < len(prices); i++ {
		b1 = max(b1, -prices[i])
		s1 = max(s1, b1+prices[i])
		b2 = max(b2, s1-prices[i])
		s2 = max(s2, b2+prices[i])
	}
	return max(0, s2)
}
