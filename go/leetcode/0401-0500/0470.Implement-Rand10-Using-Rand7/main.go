package main

import (
	"math/rand"
)

// rand7 simulates the rand7() function used in the original Java code.
func rand7() int {
	return rand.Intn(7) + 1
}

// rand10 generates a random integer from 1 to 10 using rand7.
func rand10() int {
	for {
		randValue := 7*(rand7()-1) + (rand7() - 1) // 0 to 48
		if randValue < 40 {
			return randValue%10 + 1
		}
	}
}

func main() {
	// Test the rand10 function
	for i := 0; i < 10; i++ {
		println(rand10())
	}
}
