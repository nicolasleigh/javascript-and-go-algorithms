package main

import "fmt"

// findTargetSumWays calculates the number of ways to assign symbols to make the sum of nums equal to S
func findTargetSumWays1(nums []int, target int) int {
	return dfs1(nums, target, len(nums)-1, 0)
}

func dfs1(nums []int, target, index, curSum int) int {
	// Base Cases
	if index < 0 {
		if curSum == target {
			return 1
		}
		return 0
	}

	// Decisions
	positive := dfs1(nums, target, index-1, curSum+nums[index])
	negative := dfs1(nums, target, index-1, curSum-nums[index])

	return positive + negative
}

// Memoization Solution
type pair struct {
	index int
	sum   int
}

func findTargetSumWays(nums []int, target int) int {
	memo := make(map[pair]int)
	return dfs(nums, target, len(nums)-1, 0, memo)
}

func dfs(nums []int, target, index, curSum int, memo map[pair]int) int {
	if v, ok := memo[pair{index, curSum}]; ok {
		return v
	}
	// Base Cases
	if index < 0 {
		if curSum == target {
			return 1
		}
		return 0
	}

	// Decisions
	positive := dfs(nums, target, index-1, curSum+nums[index], memo)
	negative := dfs(nums, target, index-1, curSum-nums[index], memo)

	memo[pair{index, curSum}] = positive + negative

	return memo[pair{index, curSum}]
}

func main() {
	nums := []int{1, 1, 1, 1, 1}
	S := 3
	result := findTargetSumWays(nums, S)
	fmt.Println("Number of ways:", result) // Output: Number of ways: 5
}
