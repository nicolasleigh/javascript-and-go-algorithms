package main

import (
	"cmp"
	"fmt"
	"slices"
)

func reconstructQueue(people [][]int) [][]int {
	// sort.Slice(people, func(i, j int) bool {
	// 	if people[i][0] == people[j][0] {
	// 		return people[i][1] < people[j][1]
	// 	}
	// 	return people[i][0] > people[j][0]
	// })

	// sort by height descending, if height is the same, sort by k ascending
	slices.SortFunc(people, func(a, b []int) int {
		if a[0] == b[0] {
			return cmp.Compare(a[1], b[1])
		}
		return cmp.Compare(b[0], a[0])
	})

	var res [][]int
	// insert people into the result array at the k index
	for _, p := range people {
		pos := p[1]
		res = slices.Insert(res, pos, p)
	}

	return res
}

func main() {
	people := [][]int{
		{7, 0},
		{4, 4},
		{7, 1},
		{5, 0},
		{6, 1},
		{5, 2},
	}

	result := reconstructQueue(people)
	fmt.Println(result)
}
