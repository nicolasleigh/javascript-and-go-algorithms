package main

import "slices"

func arrayPairSum(nums []int) int {
	res := 0
	slices.Sort(nums)
	for i, v := range nums {
		if i%2 == 0 {
			res += v
		}
	}
	return res
}
