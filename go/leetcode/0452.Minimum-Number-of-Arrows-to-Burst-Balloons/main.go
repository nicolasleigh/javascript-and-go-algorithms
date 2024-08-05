package main

import (
	"fmt"
	"sort"
)

func findMinArrowShots(points [][]int) int {
	// Sort the intervals based on their end coordinates
	sort.Slice(points, func(i, j int) bool {
		return points[i][1] < points[j][1]
	})

	arrows := 1
	prevEnd := points[0][1]

	// Count the number of non-overlapping intervals
	for i := 1; i < len(points); i++ {
		if points[i][0] > prevEnd {
			arrows++
			prevEnd = points[i][1]
		}
	}

	return arrows
}

func main() {
	points := [][]int{{10, 16}, {2, 8}, {1, 6}, {7, 12}}
	minArrows := findMinArrowShots(points)
	fmt.Println("Minimum arrows required:", minArrows) // Output: Minimum arrows required: 2
}
