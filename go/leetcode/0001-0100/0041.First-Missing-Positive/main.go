package main

import "fmt"

func firstMissingPositive(nums []int) int {
	numMap := make(map[int]int, len(nums))
	for _, v := range nums {
		numMap[v] = v
	}
	for index := 1; index <= len(nums); index++ {
		if _, ok := numMap[index]; !ok {
			return index
		}
	}
	return len(nums) + 1
}

func main() {
	fmt.Println(firstMissingPositive([]int{1, 3, 2}))
}
