package main

import (
	"fmt"
	"math"
	"slices"
)

func constructRectangle(area int) []int {
	length := int(math.Ceil(float64(area)/2)) + 1 // Avoid corner case: area=1
	tmp := make(map[int]int, length)
	res := []int{}
	minV := math.MaxInt32
	pos := 0
	for i := 1; i < length; i++ {
		if area%i == 0 {
			tmp[i] = area / i
		}
	}
	for i, v := range tmp {
		if abs(i-v) < minV {
			minV = abs(i - v)
			pos = i
		}
	}
	res = append(res, tmp[pos], pos)
	slices.SortFunc(res, func(a, b int) int { return b - a })
	return res
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func main() {
	// fmt.Println(constructRectangle(37))
	fmt.Println(constructRectangle(1))
}
