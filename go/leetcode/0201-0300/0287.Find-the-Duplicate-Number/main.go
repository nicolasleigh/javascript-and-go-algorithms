package main

import "fmt"

/*
input = {3,1,4,2,2,2}
range 1-5 , mid = 3 (in range itself), count = 5 which means (1 , 2 , 3 , ? , ?), count should be 3 because there are only 3 numbers that are less than equal to 3(mid) so 1,2 or 3 could be the duplicate, so we shorten range to 1-3
range 1-3, mid = 2, count = 4 (1,2,?,?), shorten range to 1-2, same reason as the first iteration
range 1-2, mid = 1, count = 1 (1), range shorten to 2 which is the duplicate
*/

// Binary search
func findDuplicate(nums []int) int {
	left := 1
	right := len(nums) - 1

	for left < right {
		mid := left + (right-left)/2
		count := 0

		// Count the numbers less than or equal to mid
		for _, num := range nums {
			if num <= mid {
				count++
			}
		}

		// If count is greater than mid, the duplicate lies in the left half
		if count > mid {
			right = mid
		} else { // Otherwise, it lies in the right half
			left = mid + 1
		}
	}

	return left
}

func main() {
	nums := []int{1, 3, 4, 2, 2}
	fmt.Println(findDuplicate(nums)) // Output: 2
}
