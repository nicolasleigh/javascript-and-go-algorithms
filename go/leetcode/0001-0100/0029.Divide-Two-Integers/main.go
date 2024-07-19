package main

import (
	"fmt"
	"math"
)

// 解法二 非递归版的二分搜索
func divide(divided int, divisor int) int {
	result, sign := 0, -1
	if divided > 0 && divisor > 0 || divided < 0 && divisor < 0 {
		sign = 1
	}
	dvd, dvs := abs(divided), abs(divisor)
	for dvd >= dvs {
		temp, m := dvs, 1
		for temp<<1 <= dvd {
			temp, m = temp<<1, m<<1
		}
		dvd -= temp
		result += m
	}
	if (sign * result) > math.MaxInt32 {
		return math.MaxInt32
	} else if (sign * result) < math.MinInt32 {
		return math.MinInt32
	}
	return sign * result
}

func abs(a int) int {
	if a > 0 {
		return a
	}
	return -a
}

func main() {
	fmt.Println(divide(100, 3))
}
