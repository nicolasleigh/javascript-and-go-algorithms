package main

import (
	"fmt"
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	length, res, diff := len(nums), 0, math.MaxInt32
	if length > 2 {
		sort.Ints(nums)
		for i := 0; i < length-2; i++ {
			// Optional if statement
			if i > 0 && nums[i] == nums[i-1] {
				continue
			}
			for start, end := i+1, length-1; start < end; {
				sum := nums[i] + nums[start] + nums[end]
				if abs(sum-target) < diff {
					res, diff = sum, abs(sum-target)
				}
				if sum == target {
					return res
				} else if sum > target {
					end--
				} else {
					start++
				}
			}
		}
	}
	return res
}

func abs(a int) int {
	if a > 0 {
		return a
	}
	return -a
}

func main() {
	fmt.Println(threeSumClosest([]int{-1, 2, 1, -4}, 1))
}
