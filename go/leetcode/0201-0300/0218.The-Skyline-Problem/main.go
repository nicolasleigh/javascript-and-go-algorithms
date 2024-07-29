package main

import (
	"fmt"
	"sort"
)

func getSkyline(buildings [][]int) [][]int {
	var res [][]int
	pq := []int{0} // Priority queue

	var points [][2]int
	for _, b := range buildings {
		points = append(points, [2]int{b[0], -b[2]}) // Using negative value to target it as the start point and influence the sorting result.
		points = append(points, [2]int{b[1], b[2]})
	}

	// Sorting points by their first value, if the first value is equal, sort by their second value.
	sort.Slice(points, func(i, j int) bool {
		if points[i][0] == points[j][0] {
			return points[i][1] < points[j][1]
		}
		return points[i][0] < points[j][0]
	})

	ongoingHeight := 0
	for _, p := range points {
		currentPoint := p[0]
		heightAtCurrentPoint := p[1]

		if heightAtCurrentPoint < 0 {
			// If it is a start point
			pq = append(pq, -heightAtCurrentPoint) // Insert it into the priority queue
			// Sort the priority queue, making the first element always the biggest one.
			sort.Slice(pq, func(i, j int) bool { return pq[i] > pq[j] })
		} else {
			// If it is a end point
			for i := 0; i < len(pq); i++ {
				if pq[i] == heightAtCurrentPoint {
					pq = append(pq[:i], pq[i+1:]...) // Remove it from the priority queue
					break
				}
			}
		}

		// The biggest height in the priority queue.
		pqTop := pq[0]
		if ongoingHeight != pqTop {
			ongoingHeight = pqTop
			res = append(res, []int{currentPoint, ongoingHeight})
		}
	}

	return res
}

func main() {
	buildings1 := [][]int{{2, 9, 10}, {3, 7, 15}, {5, 12, 12}, {15, 20, 10}, {19, 24, 8}}
	buildings2 := [][]int{{0, 2, 3}, {2, 5, 3}}
	fmt.Println(getSkyline(buildings1)) // Output: [[2 10] [3 15] [7 12] [12 0] [15 10] [20 8] [24 0]]
	fmt.Println(getSkyline(buildings2)) // Output: [[0 3] [5 0]]
}
