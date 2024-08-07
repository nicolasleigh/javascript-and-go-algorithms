// https://leetcode.com/problems/matchsticks-to-square/solutions/95744/cpp-6ms-solution-with-dfs/

package main

import (
	"fmt"
	"sort"
)

// Time Limit Exceeded
// Main function to determine if a square can be made
func makesquare1(nums []int) bool {
	if len(nums) == 0 {
		return false
	}

	totalLength := 0
	for _, num := range nums {
		totalLength += num
	}

	if totalLength%4 != 0 {
		return false
	}

	sidesLength := make([]int, 4)
	return dfs1(sidesLength, nums, 0)
}

// Helper function to perform depth-first search
func dfs1(sidesLength []int, matches []int, index int) bool {
	if index == len(matches) {
		return sidesLength[0] == sidesLength[1] && sidesLength[1] == sidesLength[2] && sidesLength[2] == sidesLength[3]
	}

	for i := 0; i < 4; i++ {
		sidesLength[i] += matches[index]
		if dfs1(sidesLength, matches, index+1) {
			return true
		}
		sidesLength[i] -= matches[index]
	}
	return false
}

/*
Third Optimization:
lets say sides are currently : [5,7,5,9] , the next element is 3.
Therefore we will be applying dfs on the following:
[5+3,7,5,9]
[5,7+3,5,9]
[5,7,5+3,9]
[5,7,5,9+3]
First and third are basically the same, only in a different order. If in the first case, dfs returned false, the third case will return false too.
So we don't run dfs in third case.
*/
// **************** Solution 2 ****************
// Main function to determine if a square can be made
func makesquare(nums []int) bool {
	if len(nums) < 4 {
		return false
	}

	// Second Optimization
	// Sort nums in descending order
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})

	sum := 0
	for _, v := range nums {
		sum += v
	}
	target := sum / 4
	if sum%4 != 0 {
		return false
	}
	if nums[0] > target {
		return false
	}

	sidesLength := make([]int, 4)
	return dfs(sidesLength, nums, 0, target)
}

// Helper function to perform depth-first search
func dfs(sidesLength []int, matches []int, index int, target int) bool {
	if index == len(matches) {
		return sidesLength[0] == sidesLength[1] && sidesLength[1] == sidesLength[2] && sidesLength[2] == sidesLength[3]
	}

outer:
	for i := 0; i < 4; i++ {
		// First Optimization
		if sidesLength[i]+matches[index] > target {
			continue
		}

		// Third Optimization
		// Skip duplicate sides to avoid redundant work
		j := i - 1
		for j >= 0 {
			if sidesLength[i] == sidesLength[j] {
				continue outer
			}
			j--
		}

		sidesLength[i] += matches[index]
		if dfs(sidesLength, matches, index+1, target) {
			return true
		}
		sidesLength[i] -= matches[index]
	}
	return false
}

func main() {
	nums := []int{1, 1, 2, 2, 2}  // Example input
	fmt.Println(makesquare(nums)) // Output: true
}
