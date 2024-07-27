package main

import (
	"fmt"
	"math"
)

// isPowerOfTwo checks if a number is a power of two.
// Solution 1
func isPowerOfTwo1(n int) bool {
	for i := 0; i < 31; i++ {
		res := int(math.Pow(2, float64(i)))
		if res == n {
			return true
		}
		if res > n {
			break
		}
	}
	return false
}

// Solution 2
func isPowerOfTwo2(n int) bool {
	if n == 0 {
		return false
	}
	for n > 0 {
		if n == 1 {
			return true
		}
		if n%2 != 0 {
			break
		}
		n /= 2
	}
	return false
}

// Solution 3
// & operation between multiple of 2 and next lower number will always give 0 and other wise it will never be 0.
func isPowerOfTwo(n int) bool {
	return (n > 0 && ((n & (n - 1)) == 0))
}

func main() {
	fmt.Println(isPowerOfTwo(1))    // Output: true
	fmt.Println(isPowerOfTwo(16))   // Output: true
	fmt.Println(isPowerOfTwo(18))   // Output: false
	fmt.Println(isPowerOfTwo(1024)) // Output: true
	fmt.Println(isPowerOfTwo(0))    // Output: false
}
