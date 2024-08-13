package main

import (
	"fmt"
)

// findLHS finds the length of the longest harmonious subsequence
func findLHS(nums []int) int {
	// Count frequencies of each number
	count := make(map[int]int)
	for _, num := range nums {
		count[num]++
	}

	res := 0
	// Iterate over the keys in the count map
	for x := range count {
		if count[x+1] > 0 {
			res = max(res, count[x]+count[x+1])
		}
	}
	return res
}

func main() {
	// Example usage
	nums := []int{1, 3, 2, 2, 1, 3, 3, 2, 4, 5}
	fmt.Println(findLHS(nums)) // Output: 6
}
