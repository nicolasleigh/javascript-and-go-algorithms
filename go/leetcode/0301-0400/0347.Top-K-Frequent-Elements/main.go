package main

import (
	"fmt"
	"sort"
)

func topKFrequent(nums []int, k int) []int {
	counter := make(map[int]int)

	// Count the frequency of each number in nums
	for _, num := range nums {
		counter[num]++
	}

	// Create a slice of the map entries (key-value pairs)
	type kv struct {
		Key   int
		Value int
	}
	var sorted []kv
	for k, v := range counter {
		sorted = append(sorted, kv{Key: k, Value: v})
	}

	// Sort the slice by frequency in descending order
	sort.Slice(sorted, func(i, j int) bool {
		return sorted[i].Value > sorted[j].Value
	})

	// Extract the top k elements
	var res []int
	for i := 0; i < k; i++ {
		res = append(res, sorted[i].Key)
	}

	return res
}

func main() {
	nums := []int{1, 1, 1, 2, 2, 3}
	k := 2
	fmt.Println(topKFrequent(nums, k)) // Output: [1, 2]
}
