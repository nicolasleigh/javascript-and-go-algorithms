package main

import (
	"fmt"
	"slices"
)

func singleNumber1(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	slices.SortFunc(nums, func(a, b int) int {
		return a - b
	})
	index := 0
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] == nums[i+1] {
			index = i + 2
			i++
		} else {
			return nums[i]
		}
	}
	return nums[index]
}

func singleNumber(nums []int) int {
	res := nums[0]
	for i := 1; i < len(nums); i++ {
		res = res ^ nums[i]
	}
	return res
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1}))
}
