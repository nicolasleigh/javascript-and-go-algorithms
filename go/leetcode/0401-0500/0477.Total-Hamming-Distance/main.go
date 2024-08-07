// https://leetcode.com/problems/total-hamming-distance/solutions/96243/share-my-o-n-c-bitwise-solution-with-thinking-process-and-explanation/

package main

import "fmt"

func totalHammingDistance(nums []int) int {
	size := len(nums)
	if size < 2 {
		return 0
	}

	res := 0
	for {
		zeroCount := 0
		zeroOne := [2]int{0, 0}
		for i := 0; i < size; i++ {
			if nums[i] == 0 {
				zeroCount++
			}
			zeroOne[nums[i]%2]++
			nums[i] = nums[i] >> 1
		}
		res += zeroOne[0] * zeroOne[1]
		if zeroCount == size {
			break
		}
	}

	return res
}

func main() {
	nums := []int{4, 14, 2}
	fmt.Println(totalHammingDistance(nums)) // Output: 6
}
