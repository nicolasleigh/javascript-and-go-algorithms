package main

import (
	"cmp"
	"fmt"
	"slices"
)

func merge(intervals [][]int) [][]int {
	// Sort intervals based on the start element
	slices.SortFunc(intervals, func(a, b []int) int {
		return cmp.Compare(a[0], b[0])
	})

	// Initialize variables
	prev := intervals[0]
	res := [][]int{}

	// Iterate through sorted intervals
	for i := 1; i < len(intervals); i++ {
		cur := intervals[i]
		if cur[0] > prev[1] {
			// No overlap
			res = append(res, prev)
			prev = cur
		} else {
			// Overlap found, merge intervals
			prev[1] = max(cur[1], prev[1])
		}
	}

	// Add the last merged interval
	res = append(res, prev)

	return res
}

func main() {
	intervals := [][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}
	fmt.Println("Original intervals:", intervals)
	fmt.Println("Merged intervals:", merge(intervals))
}
