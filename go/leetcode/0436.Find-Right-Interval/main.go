package main

import (
	"fmt"
	"sort"
)

func findRightInterval(intervals [][]int) []int {

	// [3]int:
	//   0: interval[0] -- start
	//   1: interval[1] -- end
	//   2: original index
	//
	sorted := make([][3]int, 0, len(intervals))

	for i, v := range intervals {
		sorted = append(sorted, [3]int{v[0], v[1], i})
	}

	// Sort by start
	sort.Slice(
		sorted,
		func(i, j int) bool { return sorted[i][0] < sorted[j][0] },
	)

	res := make([]int, len(intervals))

	for i := 0; i < len(sorted); i++ {
		idx := sort.Search(
			len(sorted),
			func(j int) bool { return sorted[i][1] <= sorted[j][0] },
		)
		if idx == len(sorted) {
			// Not found
			res[sorted[i][2]] = -1
		} else {
			res[sorted[i][2]] = sorted[idx][2]
		}
	}

	return res
}

func main() {
	intervals := [][]int{{1, 2}, {2, 3}, {0, 1}}
	result := findRightInterval(intervals)
	fmt.Println(result) // Output: [1 -1 0]
}
