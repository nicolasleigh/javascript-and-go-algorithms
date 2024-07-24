package main

import (
	"fmt"
)

func canCompleteCircuit(gas []int, cost []int) int {
	start := 0
	curSum := 0
	totalSum := 0

	for i := 0; i < len(gas); i++ {
		rest := gas[i] - cost[i]
		curSum += rest
		totalSum += rest
		if curSum < 0 {
			curSum = 0
			start = i + 1
		}
	}

	if totalSum < 0 {
		return -1
	}

	return start
}

func main() {
	// fmt.Println(canCompleteCircuit([]int{1, 2, 3, 4, 5}, []int{3, 4, 5, 1, 2})) // Output: 3
	fmt.Println(canCompleteCircuit([]int{3, 1, 1}, []int{1, 2, 2})) // Output: 0
}
