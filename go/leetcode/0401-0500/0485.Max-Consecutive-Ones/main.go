package main

func findMaxConsecutiveOnes(nums []int) int {
	res, cnt := 0, 0
	for _, v := range nums {
		if v == 1 {
			cnt++
		} else {
			cnt = 0
		}
		res = max(res, cnt)
	}
	return res
}
