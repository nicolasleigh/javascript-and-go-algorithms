package main

func intersect(nums1 []int, nums2 []int) []int {
	count := map[int]int{}
	var res []int
	for _, num := range nums1 {
		count[num]++
	}
	for _, num := range nums2 {
		if count[num] > 0 {
			res = append(res, num)
			count[num]--
		}
	}
	return res
}
