package main

import (
	"fmt"
	"sort"
)

func fourSum(nums []int, target int) [][]int {
	sort.Ints(nums)
	var res [][]int

	if len(nums) < 4 {
		return res
	}

	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		for j := i + 1; j < len(nums); j++ {
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}
			start, end := j+1, len(nums)-1

			for start < end {
				sum := nums[i] + nums[j] + nums[start] + nums[end]
				if sum > target {
					end--
				} else if sum < target {
					start++
				} else {
					res = append(res, []int{nums[i], nums[j], nums[start], nums[end]})
					lastStart := start
					lastEnd := end
					start++
					end--

					for start < end && nums[start] == nums[lastStart] {
						start++
					}
					for start < end && nums[end] == nums[lastEnd] {
						end--
					}
				}
			}
		}
	}
	return res
}

func main() {
	fmt.Println(fourSum([]int{-3, -2, -1, 0, 0, 1, 2, 3}, 0))
}
