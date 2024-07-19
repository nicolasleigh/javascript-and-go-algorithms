package main

import "fmt"

// 解法一 二分, 找到最后一个满足 n^2 <= x 的整数n
// https://en.wikipedia.org/wiki/Integer_square_root
func mySqrt(x int) int {
	low := 0
	high := x + 1

	for low != high-1 {
		// mid := (low + high) / 2
		mid := low + (high-low)>>1
		if mid*mid <= x {
			low = mid
		} else {
			high = mid
		}
	}

	return low
}

func main() {
	fmt.Println(mySqrt(4))
}
