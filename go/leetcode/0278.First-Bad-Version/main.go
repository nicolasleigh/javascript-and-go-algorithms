package main

import (
	"fmt"
	"sort"
)

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

// mock isBadVersion function
func isBadVersion(version int) bool {
	// For illustration purposes, assume version 4 and above are bad
	return version >= 4
}

func firstBadVersion1(n int) int {
	return sort.Search(n, func(version int) bool {
		return isBadVersion(version)
	})
}

func firstBadVersion(n int) int {
	low, high := 1, n

	for low <= high {
		mid := low + (high-low)/2
		if isBadVersion(mid) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return low
}

func main() {
	n := 5
	result := firstBadVersion(n)
	fmt.Println("First bad version:", result) // Output: 4
}
