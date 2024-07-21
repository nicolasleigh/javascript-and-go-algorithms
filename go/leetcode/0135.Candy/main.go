package main

import (
	"fmt"
)

func candy(ratings []int) int {
	n := len(ratings)
	candies := make([]int, n)
	for i := range candies {
		candies[i] = 1
	}

	// Left to right, compare with left neighbor
	for i := 1; i < n; i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		}
	}

	// Right to left, compare with right neighbor
	for i := n - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			candies[i] = max(candies[i], candies[i+1]+1)
		}
	}

	// Calculate the total number of candies
	count := 0
	for _, candy := range candies {
		count += candy
	}

	return count
}

func main() {
	fmt.Println(candy([]int{1, 0, 2})) // Output: 5
	fmt.Println(candy([]int{1, 2, 2})) // Output: 4
}
