package main

import "math"

func isPowerOfFour1(num int) bool {
	for num >= 4 {
		if num%4 == 0 {
			num = num / 4
		} else {
			return false
		}
	}
	return num == 1
}

func isPowerOfFour(n int) bool {
	if n <= 0 {
		return false
	}
	logVal := math.Log(float64(n)) / math.Log(4)
	return logVal == math.Floor(logVal)
}