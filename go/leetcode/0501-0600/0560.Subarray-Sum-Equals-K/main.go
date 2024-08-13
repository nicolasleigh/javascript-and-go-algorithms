package main

import "fmt"

func subarraySum(arr []int, k int) int {
	n := len(arr) // Get the size of the array

	prefix := make([]int, n) // Create a prefix sum array

	prefix[0] = arr[0] // Initialize the first element

	// Build the prefix sum array
	for i := 1; i < n; i++ {
		prefix[i] = arr[i] + prefix[i-1]
	}

	mp := make(map[int]int) // Declare a map to store prefix sums
	res := 0                // To store the number of subarrays with sum equal to 'k'

	for i := 0; i < n; i++ {
		if prefix[i] == k { // If the prefix sum itself is equal to k
			res++
		}

		// Check if (prefix[i] - k) is in the map
		if count, ok := mp[prefix[i]-k]; ok {
			res += count // Add the count of (prefix[i] - k) to the result
		}

		// Update the map with the current prefix sum
		mp[prefix[i]]++
	}

	return res // Return the final count of subarrays
}

func main() {
	arr := []int{1, 1, 1}
	k := 2
	fmt.Println(subarraySum(arr, k)) // Example usage
}

// https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759909/c-full-explained-every-step-w-dry-run-o-n-2-o-n-two-approaches/