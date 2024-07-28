package main

import (
	"fmt"
	"slices"
)

// Counting sort
func hIndex(citations []int) int {
	length := slices.Max(citations) + 1
	temp := make([]int, length) // Each element in the citations represents an index in the temp
	// Count frequency, take temp[6]=2 for example, it represents 6 citations happened 2 times (aka. the researcher has 2 papers have 6 citations)
	for _, v := range citations {
		temp[v] = temp[v] + 1
	}
	// Change to count array, take temp[4]=3 for example, it represents citations that greater or equal to 4 happened 3 times (aka. the researcher has 3 papers that each has citation greater or equal to 4)
	for i := len(temp) - 1; i > 0; i-- {
		temp[i-1] += temp[i]
	}
	for i := len(temp) - 1; i >= 0; i-- {
		if temp[i] >= i {
			return i
		}
	}
	return 0
}

func main() {
	citations := []int{3, 0, 6, 1, 5}
	result := hIndex(citations)
	fmt.Println(result) // Output: 3
}
