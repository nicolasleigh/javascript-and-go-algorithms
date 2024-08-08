package main

import (
	"fmt"
	"math"
)

// 1221ms
func checkPerfectNumber1(num int) bool {
	sum := 0
	for i := 1; i <= num/2; i++ {
		if num%i == 0 {
			sum += i
		}
	}
	return sum == num
}

func checkPerfectNumber(num int) bool {
	if num <= 1 {
		return false
	}
	sum, bound := 1, int(math.Sqrt(float64(num)))
	for i := 2; i <= bound; i++ {
		if num%i == 0 {
			sum += num/i + i
		}
	}
	return sum == num
}

func main() {
	fmt.Println(checkPerfectNumber(28))
}
