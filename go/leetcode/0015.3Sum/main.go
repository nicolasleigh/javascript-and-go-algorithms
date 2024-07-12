package main

import (
	"fmt"
	"sort"
)

// 最优解，双指针 + 排序
func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	result, length := make([][]int, 0), len(nums)
	for i := 1; i < length-1; i++ {
		start, end := 0, length-1
		// Avoid the corner case: input - [0,0,0,0], wrong output - [[0,0,0],[0,0,0]]
		if i > 1 && nums[i] == nums[i-1] {
			start = i - 1
		}

		for start < i && end > i {
			// Avoid the duplicate outputs
			if start > 0 && nums[start] == nums[start-1] {
				start++
				continue
			}
			if end < length-1 && nums[end] == nums[end+1] {
				end--
				continue
			}

			sum := nums[start] + nums[end] + nums[i]
			// If less than 0, the left value is too small, so move the left pointer right
			// If greater than 0, the right value is too big, so move the right pointer left
			if sum == 0 {
				result = append(result, []int{nums[start], nums[i], nums[end]})
				start++
				end--
			} else if sum > 0 {
				end--
			} else {
				start++
			}
		}
	}
	return result
}

func main() {
	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4}))
}
