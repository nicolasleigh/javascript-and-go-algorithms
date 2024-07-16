package main

func plusOne(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		digits[i]++
		if digits[i] != 10 {
			// Without carry
			return digits
		}
		// With carry
		digits[i] = 0
	}
	// Add 1 to the start of the digits slice
	digits = unshift(digits, 1)
	return digits
}

func unshift(s []int, e int) []int {
	return append([]int{e}, s...)
}
