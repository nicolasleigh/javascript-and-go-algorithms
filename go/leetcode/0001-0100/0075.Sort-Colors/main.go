package main

import "fmt"

func sortColors(nums []int) {
	var zeros, ones int
	for _, v := range nums {
		if v == 0 {
			zeros++
		} else if v == 1 {
			ones++
		}
	}
	for i := 0; i < zeros; i++ {
		nums[i] = 0
	}
	for i := zeros; i < zeros+ones; i++ {
		nums[i] = 1
	}
	for i := zeros + ones; i < len(nums); i++ {
		nums[i] = 2
	}
}

func main() {
	nums := []int{2, 0, 2, 1, 1, 0}
	sortColors(nums)
	fmt.Println(nums)
}
