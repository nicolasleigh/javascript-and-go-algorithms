package main

import "sort"

func minMoves2(nums []int) int {
	sort.Ints(nums)
	res, mid := 0, len(nums)/2
	for _, v := range nums {
		res += abs(nums[mid] - v)
	}
	return res
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}
