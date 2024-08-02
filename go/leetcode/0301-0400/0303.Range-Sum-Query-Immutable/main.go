package main

import "fmt"

type NumArray struct {
	preSum []int
}

func Constructor(nums []int) NumArray {
	preSum := make([]int, len(nums))
	copy(preSum, nums)
	for i := 1; i < len(preSum); i++ {
		preSum[i] += preSum[i-1]
	}
	return NumArray{preSum}
}

func (this *NumArray) SumRange(left int, right int) int {
	if left == 0 {
		return this.preSum[right]
	}
	return this.preSum[right] - this.preSum[left-1]
}

func main() {
	nums := []int{1, 2, 3, 4, 5}
	obj := Constructor(nums)
	fmt.Println(obj.SumRange(0, 2)) // Output: 6
	fmt.Println(obj.SumRange(2, 4)) // Output: 12
}
