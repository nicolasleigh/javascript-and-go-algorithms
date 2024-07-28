package main

func isUgly(num int) bool {
	if num > 0 {
		for _, v := range []int{2, 3, 5} {
			for num%v == 0 {
				num /= v
			}
		}
	}
	return num == 1
}
