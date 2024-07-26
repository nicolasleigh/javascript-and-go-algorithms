package main

func containsDuplicate(nums []int) bool {
	record := make(map[int]bool, len(nums))
	for _, n := range nums {
		if _, ok := record[n]; ok {
			return true
		}
		record[n] = true
	}
	return false
}