package main

import (
	"cmp"
	"fmt"
	"slices"
)

func insert(intervals [][]int, newInterval []int) [][]int {
	intervals = append(intervals, newInterval) // The only difference between the problem 0056 and the problem 0057
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
	intervals := [][]int{{1, 3}, {6, 9}}
	newInterval := []int{2, 5}
	fmt.Println("New intervals:", insert(intervals, newInterval))
}
