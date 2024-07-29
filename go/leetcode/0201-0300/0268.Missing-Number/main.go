package main

import "fmt"

func missingNumber(nums []int) int {
	n := len(nums)
	sum1, sum2 := 0, 0
	for v := range n + 1 {
		sum1 += v
	}
	for _, v := range nums {
		sum2 += v
	}
	return sum1 - sum2
}

func main() {
	nums := []int{3, 0, 1}
	fmt.Println(missingNumber(nums))
}
