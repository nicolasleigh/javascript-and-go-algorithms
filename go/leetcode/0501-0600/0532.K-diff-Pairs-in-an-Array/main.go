package main

import (
	"fmt"
)

func findPairs(nums []int, k int) int {
	mp := make(map[int]int)
	for _, num := range nums {
		mp[num]++
	}

	res := 0
	for key, count := range mp {
		if k == 0 {
			if count > 1 {
				res++
			}
		} else if _, ok := mp[key+k]; ok {
			res++
		}
	}

	return res
}

func main() {
	nums := []int{1, 2, 3, 4, 5}
	k := 1
	fmt.Println(findPairs(nums, k)) // Output: 4
}

// https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1756874/c-multiple-approaches-maps-two-pointer/