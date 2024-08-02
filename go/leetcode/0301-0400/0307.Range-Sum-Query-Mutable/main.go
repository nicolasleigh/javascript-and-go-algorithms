package main

import "fmt"

type NumArray struct {
	preSum []int
	nums   []int
}

func Constructor(nums []int) NumArray {
	preSum := make([]int, len(nums))
	preSum[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		preSum[i] = preSum[i-1] + nums[i]
	}
	return NumArray{preSum: preSum, nums: nums}
}

func (this *NumArray) Update(index int, val int) {
	original := this.nums[index]
	difference := val - original
	this.nums[index] = val
	for i := index; i < len(this.preSum); i++ {
		this.preSum[i] += difference
	}
}

func (this *NumArray) SumRange(left int, right int) int {
	if left == 0 {
		return this.preSum[right]
	}
	return this.preSum[right] - this.preSum[left-1]
}

func main() {
	nums := []int{1, 3, 5}
	obj := Constructor(nums)
	fmt.Println(obj.SumRange(0, 2)) // Output: 9
	obj.Update(1, 2)
	fmt.Println(obj.SumRange(0, 2)) // Output: 8
}
