package main

// Similar to 0169
func majorityElement(nums []int) []int {
	m := make(map[int]int)
	var res []int
	for _, v := range nums {
		m[v]++
	}
	for k, v := range m {
		if v > len(nums)/3 {
			res = append(res, k)
		}
	}
	return res
}