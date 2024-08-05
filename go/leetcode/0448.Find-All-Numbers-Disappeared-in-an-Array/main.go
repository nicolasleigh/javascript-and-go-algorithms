package main

func findDisappearedNumbers(nums []int) []int {
	n := len(nums)
	set := make(map[int]struct{})
	res := []int{}
	for _, v := range nums {
		set[v] = struct{}{}
	}
	for v := range n + 1 {
		if v == 0 {
			continue
		}
		if _, ok := set[v]; !ok {
			res = append(res, v)
		}
	}
	return res
}
