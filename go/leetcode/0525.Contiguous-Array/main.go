package main

import "fmt"

func findMaxLength(nums []int) int {
	mp, sum, res := make(map[int]int), 0, 0

	for i, num := range nums {
		if num == 0 {
			sum--
		} else {
			sum++
		}

		if sum == 0 {
			res = i + 1
		} else {
			if idx, ok := mp[sum]; ok {
				res = max(res, i-idx)
			} else {
				mp[sum] = i
			}
		}
	}

	return res
}

func main() {
	nums := []int{0, 1, 0, 1, 1, 0, 0, 1}
	fmt.Println(findMaxLength(nums)) // 8
}

// https://leetcode.com/problems/contiguous-array/solutions/4881359/easy-explanation-hashmap-beats-93-29-c-java-python3-kotlin/