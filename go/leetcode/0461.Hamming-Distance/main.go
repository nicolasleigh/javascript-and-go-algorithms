package main

import "math/bits"

func hammingDistance(x int, y int) int {
	z := x ^ y
	res := bits.OnesCount(uint(z))
	return res
}
