// https://leetcode.com/problems/super-pow/solutions/84472/c-clean-and-short-solution/

package main

import (
	"fmt"
)

const base = 1337

// superPow calculates the super power of a with the list b
func superPow(a int, b []int) int {
	if len(b) == 0 {
		return 1
	}
	lastDigit := b[len(b)-1]
	b = b[:len(b)-1]
	return (powmod(superPow(a, b), 10) * powmod(a, lastDigit)) % base
}

// powmod calculates (a^k) % base where 0 <= k <= 10
// A series of modulo operations on the same base is equivalent to exactly one modulo operation, i.e. (Number % base % base ... % base) == Number % base, so it does not matter if "'a' did one more % operation than result".
// The whole point of using a%base here is that "result * a" may overflow, but with "(result % base) * (a % base)", we can guarantee there is no overflowing.
func powmod(a, k int) int {
	a %= base
	result := 1
	for i := 0; i < k; i++ {
		result = (result * a) % base
	}
	return result
}

func main() {
	a := 2
	b := []int{1, 0}
	fmt.Println(superPow(a, b)) // Output: 1024

	a = 2
	b = []int{3}
	fmt.Println(superPow(a, b)) // Output: 8

	a = 2147483647
	b = []int{2, 0, 0}
	fmt.Println(superPow(a, b)) // Output: 1198
}
