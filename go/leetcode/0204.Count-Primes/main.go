package main

import "fmt"

// countPrimes function counts the number of prime numbers less than a given number n
func countPrimes(n int) int {
	notPrime := make([]bool, n)
	count := 0
	for i := 2; i < n; i++ {
		if !notPrime[i] {
			count++
			for j := 2; i*j < n; j++ {
				notPrime[i*j] = true
			}
		}
	}
	return count
}

func main() {
	n := 10
	fmt.Println("Number of primes less than", n, ":", countPrimes(n)) // Output: 4
}
