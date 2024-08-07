package main

import (
	"fmt"
	"math"
)

// splitArray finds the minimal largest sum of any split of the array into K parts
func splitArray(arr []int, k int) int {
	n := len(arr)
	total := 0
	maxV := math.MinInt32

	// Calculate total sum and maximum element
	for _, i := range arr {
		total += i
		maxV = max(maxV, i)
	}

	// "maxV" means when each element formed as a subarray, the maximum value of all the subarrays is the max value of the arr slice
	// "total" means when the whole arr slice formed as a single subarray, the maximum value of all the subarrays is the sum of all the element
	l, r := maxV, total
	res := math.MaxInt32

	// Binary search
	for l <= r {
		mid := l + (r-l)/2
		sum := 0
		count := 1

		for i := 0; i < n; i++ {
			if arr[i]+sum <= mid {
				sum += arr[i]
			} else {
				// When arr[i]+sum>mid, it means we need to split a new array, this new array's sum is equal arr[i] and we need to increment the count
				sum = arr[i]
				count++
			}
		}

		if count <= k {
			// count<=k, it means mid too large
			res = min(res, mid)
			r = mid - 1
		} else {
			// count>k, it means mid too small
			l = mid + 1
		}
	}

	return res
}

func main() {
	arr := []int{7, 2, 5, 10, 8} // Example usage
	k := 2
	fmt.Println(splitArray(arr, k)) // Output: 18
}
