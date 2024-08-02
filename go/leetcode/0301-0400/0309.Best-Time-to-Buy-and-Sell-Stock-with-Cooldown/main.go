// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/75928/share-my-dp-solution-by-state-machine-thinking/

package main

import (
	"fmt"
	"math"
)

func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	// stateA represents the maximum profit without holding a stock and not in the cooldown period.
	stateA := make([]int, len(prices))
	// stateB represents the maximum profit with holding a stock.
	stateB := make([]int, len(prices))
	// stateC represents the maximum profit without holding a stock and in the cooldown period.
	stateC := make([]int, len(prices))

	stateA[0] = 0
	stateB[0] = -prices[0]
	stateC[0] = math.MinInt32

	for i := 1; i < len(prices); i++ {
		stateA[i] = max(stateA[i-1], stateC[i-1])
		stateB[i] = max(stateB[i-1], stateA[i-1]-prices[i])
		stateC[i] = stateB[i-1] + prices[i]
	}

	return max(stateA[len(prices)-1], stateC[len(prices)-1])
}

func main() {
	prices := []int{1, 2, 3, 0, 2}
	fmt.Println(maxProfit(prices)) // Output: 3
}
