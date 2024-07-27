package main

import (
	"fmt"
)

// Deque
// maxSlidingWindow finds the maximum value in each sliding window of size k.
func maxSlidingWindow(nums []int, k int) []int {
	q := []int{}   // stores indices
	res := []int{} // stores results

	for i := 0; i < len(nums); i++ {
		// Remove indices from the back of the queue if the corresponding values are less than nums[i] to make sure q[0] is the index of the maximum value
		for len(q) > 0 && nums[q[len(q)-1]] <= nums[i] {
			// All values that are less than or equal to the current value are popped out of the queue
			q = q[:len(q)-1]
		}
		// Add the current index to the back of the queue
		q = append(q, i)
		// Remove the first element if it's outside the window
		if q[0] == i-k {
			q = q[1:]
		}
		// If the window has k elements, add the maximum to the results, the maximum's index is always in the q[0]
		if i >= k-1 {
			res = append(res, nums[q[0]])
		}
	}
	return res
}

func main() {
	nums := []int{1, 3, -1, -3, 5, 3, 6, 7}
	k := 3
	fmt.Println(maxSlidingWindow(nums, k)) // Output: [3, 3, 5, 5, 6, 7]
}
