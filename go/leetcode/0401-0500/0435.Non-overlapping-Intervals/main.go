package main

import (
	"cmp"
	"slices"
)

// eraseOverlapIntervals takes a slice of intervals and returns the number of intervals to remove
func eraseOverlapIntervals(intervals [][]int) int {
	// Sort intervals by their end time
	slices.SortFunc(intervals, func(a, b []int) int {
		return cmp.Compare(a[1], b[1])
	})

	end := intervals[0][1]
	overlaps := 0

	for i := 1; i < len(intervals); i++ {
		if intervals[i][0] < end {
			overlaps++
		} else {
			end = intervals[i][1]
		}
	}

	return overlaps
}

func main() {
	// Example usage
	intervals := [][]int{{1, 2}, {2, 3}, {3, 4}, {1, 3}}
	result := eraseOverlapIntervals(intervals)
	println(result) // Output: 1
}
