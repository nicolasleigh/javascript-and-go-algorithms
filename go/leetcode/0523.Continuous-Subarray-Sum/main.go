package main

import "fmt"

/*
1.	Prefix Sums:
	•	A prefix sum is the sum of elements from the start of the array up to a certain index. Let’s denote the prefix sum up to index i as prefixSum[i].
	2.	Subarray Sum:
	•	The sum of elements in a subarray from index i+1 to j can be derived using prefix sums:

SubarraySum[i+1  to  j] = prefixSum[j] - prefixSum[i]

	3.	Remainder Analysis:
	•	When we say a subarray sum is a multiple of k, we mean:

(prefixSum[j] - prefixSum[i]) % k == 0

	•	Rearranging this equation, we get:

prefixSum[j] % k - prefixSum[i] % k == 0

	•	This can be simplified to:

prefixSum[j] % k == prefixSum[i] % k


Why Same Remainder Implies Multiple of k:

If prefixSum[j] % k and prefixSum[i] % k are the same, then:

prefixSum[j] - prefixSum[i]  is divisible by  k


This is because:

(prefixSum[j] - prefixSum[i]) % k = (prefixSum[j] % k - prefixSum[i] % k) % k

If prefixSum[j] % k == prefixSum[i] % k, then:

(prefixSum[j] - prefixSum[i]) % k = 0

This shows that the difference between these two prefix sums is indeed a multiple of k.

In Summary:

	•	If two prefix sums have the same remainder when divided by k, then the difference between these two sums is a multiple of k.
	•	This property is used to efficiently check for subarrays where the sum is a multiple of k by keeping track of remainders and their first occurrences in a hash map.
*/

func checkSubarraySum(nums []int, k int) bool {
	mp := make(map[int]int)
	mp[0] = -1
	sum := 0

	for i, num := range nums {
		sum += num
		mod := sum % k
		if prevIndex, found := mp[mod]; found {
			if i-prevIndex >= 2 {
				return true
			}
		} else {
			mp[mod] = i
		}
	}

	return false
}

func main() {
	nums := []int{23, 2, 4, 6, 7}
	k := 6
	fmt.Println(checkSubarraySum(nums, k)) // Output should be true
}

// https://leetcode.com/problems/continuous-subarray-sum/solutions/5276981/prefix-sum-hashmap-patterns-7-problems/
