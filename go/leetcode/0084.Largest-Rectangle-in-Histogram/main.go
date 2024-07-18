package main

import (
	"fmt"
)

func largestRectangleArea(heights []int) int {
	st := make([]int, 0)
	maxArea := 0
	heights = append([]int{0}, heights...) // prepend 0
	heights = append(heights, 0)           // append 0

	for i := 0; i < len(heights); i++ {
		for len(st) > 0 && heights[i] < heights[st[len(st)-1]] {
			h := heights[st[len(st)-1]]
			st = st[:len(st)-1]
			w := i - st[len(st)-1] - 1
			maxArea = max(maxArea, h*w)
		}
		st = append(st, i)
	}

	return maxArea
}

func main() {
	heights := []int{2, 1, 5, 6, 2, 3}
	fmt.Println("Largest rectangle area:", largestRectangleArea(heights)) // Output: 10
}
