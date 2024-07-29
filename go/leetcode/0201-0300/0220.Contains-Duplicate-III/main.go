package main

import (
	"fmt"
)

// Time Limit Exceeded
func containsNearbyAlmostDuplicate1(nums []int, indexDiff int, valueDiff int) bool {
	for i := 0; i < len(nums); i++ {
		count := 0
		for j := i + 1; j < len(nums) && count < indexDiff; j++ {
			if abs(nums[i]-nums[j]) <= valueDiff {
				return true
			}
			count++
		}
	}
	return false
}

func containsNearbyAlmostDuplicate2(nums []int, k int, t int) bool {
	if t < 0 {
		return false
	}

	n := len(nums)
	bucket := make(map[int]int)
	bucketSize := t + 1 // t may be 0

	for i := 0; i < n; i++ {
		idx := nums[i] / bucketSize
		if nums[i] < 0 {
			idx--
		}
		if _, found := bucket[idx]; found {
			return true
		}
		if v, found := bucket[idx-1]; found && abs(nums[i]-v) < bucketSize {
			return true
		}
		if v, found := bucket[idx+1]; found && abs(nums[i]-v) < bucketSize {
			return true
		}
		bucket[idx] = nums[i]
		if i >= k {
			idx = nums[i-k] / bucketSize
			if bucket[idx] < 0 {
				idx--
			}
			delete(bucket, idx) // Remove the last bucket that i can reach
		}
	}

	return false
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
	if k <= 0 || t < 0 || len(nums) < 2 {
		return false
	}
	buckets := map[int]int{}
	for i := 0; i < len(nums); i++ {
		// Get the ID of the bucket from element value nums[i] and bucket width t + 1
		key := nums[i] / (t + 1)
		// -7/9 = 0, but need -7/9 = -1
		if nums[i] < 0 {
			key--
		}
		if _, ok := buckets[key]; ok {
			return true
		}
		// check the lower bucket, and have to check the value too
		if v, ok := buckets[key-1]; ok && nums[i]-v <= t {
			return true
		}
		// check the upper bucket, and have to check the value too
		if v, ok := buckets[key+1]; ok && v-nums[i] <= t {
			return true
		}
		// maintain k size of window
		if len(buckets) >= k {
			delete(buckets, nums[i-k]/(t+1))
		}
		buckets[key] = nums[i]
	}
	return false
}

func main() {
	nums := []int{1, 2, 3, 1}
	k := 3
	t := 0
	fmt.Println(containsNearbyAlmostDuplicate(nums, k, t)) // Output: true

	nums = []int{1, 5, 9, 1, 5, 9}
	k = 2
	t = 3
	fmt.Println(containsNearbyAlmostDuplicate(nums, k, t)) // Output: false
}
