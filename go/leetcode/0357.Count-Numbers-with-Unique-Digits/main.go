package main

import "fmt"

func countNumbersWithUniqueDigits1(n int) int {
	// f(0)=1, f(1)=10, f(2)=9*9, f(3)=f(2)*8, f(4)=f(3)*7, f(5)=f(4)*6, f(6)=f(5)*5, f(7)=f(6)*4, f(8)=f(7)*3, f(9)=f(8)*2, f(10)=f(9)*1, f(11)=0, f(12)=0 ...
	res := []int{1, 10, 91, 739, 5275, 32491, 168571, 712891, 2345851, 5611771, 8877691}
	if n >= 10 {
		return res[10]
	}
	return res[n]
}

func countNumbersWithUniqueDigits(n int) int {
	if n == 0 {
		return 1
	}
	res, count, availableNum := 10, 9, 9
	for n > 1 && availableNum > 0 {
		count *= availableNum
		res += count
		availableNum--
		n--
	}
	return res
}

func main() {
	fmt.Println(countNumbersWithUniqueDigits(2)) // Output: 91
	fmt.Println(countNumbersWithUniqueDigits(3)) // Output: 739
}
