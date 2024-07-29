package main

import (
	"fmt"
	"strconv"
)

// summaryRanges returns a summary of ranges in a sorted array.
func summaryRanges(arr []int) []string {
	n := len(arr)
	var res []string

	for i := 0; i < n; i++ {
		start := arr[i]
		for i+1 < n && arr[i+1] == arr[i]+1 {
			i++
		}
		if arr[i] != start {
			res = append(res, strconv.Itoa(start)+"->"+strconv.Itoa(arr[i]))
		} else {
			res = append(res, strconv.Itoa(start))
		}
	}

	return res
}

func main() {
	arr := []int{0, 1, 2, 4, 5, 7}
	fmt.Println(summaryRanges(arr)) // Output: ["0->2", "4->5", "7"]

	arr = []int{0, 2, 3, 4, 6, 8, 9}
	fmt.Println(summaryRanges(arr)) // Output: ["0", "2->4", "6", "8->9"]

	arr = []int{}
	fmt.Println(summaryRanges(arr)) // Output: []
}
