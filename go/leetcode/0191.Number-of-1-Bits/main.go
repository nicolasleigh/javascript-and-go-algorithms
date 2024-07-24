package main

import (
	"fmt"
	"math/bits"
)

func hammingWeight(n int) int {
	return bits.OnesCount(uint(n))
}

func main() {
	fmt.Println(hammingWeight(2147483645)) // Output: 30
}
