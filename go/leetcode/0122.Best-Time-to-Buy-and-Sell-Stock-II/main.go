package main

func maxProfit1(prices []int) int {
	sum := 0
	for i := 1; i < len(prices); i++ {
		diff := prices[i] - prices[i-1]
		if diff > 0 {
			sum += diff
		}
	}
	return sum
}

func maxProfit2(prices []int) int {
	dp := make([][2]int, len(prices))
	// dp[i][0] means the max profit of the (i+1)th day when holding a stock, always negative
	// dp[i][1] means the max profit of the (i+1)th day when not holding a stock
	dp[0][0] = -prices[0] // First day's profit when holding a stock
	dp[0][1] = 0          // First day's profit when not holding a stock

	for i := 1; i < len(prices); i++ {
		dp[i][0] = max(dp[i-1][0], dp[i-1][1]-prices[i]) // Not buying VS buying at the current price
		dp[i][1] = max(dp[i-1][1], prices[i]+dp[i-1][0]) // Not selling VS selling at the current price
	}

	return dp[len(prices)-1][1]
}

func maxProfit(prices []int) int {
	s0 := make([]int, len(prices))
	s1 := make([]int, len(prices))

	s0[0] = -prices[0] // Buy
	s1[0] = 0          // Sell

	for i := 1; i < len(prices); i++ {
		s0[i] = max(s0[i-1], s1[i-1]-prices[i])
		s1[i] = max(s1[i-1], prices[i]+s0[i-1])
	}

	return s1[len(prices)-1]
}
