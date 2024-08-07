package main

import "fmt"

// findPoisonedDuration calculates the total duration of poison effect
func findPoisonedDuration(timeSeries []int, duration int) int {
	res := 0

	for i := 0; i < len(timeSeries)-1; i++ {
		res += min(duration, timeSeries[i+1]-timeSeries[i])
	}

	return res + duration
}

func main() {
	A := []int{1, 2, 7}
	duration := 3
	result := findPoisonedDuration(A, duration)
	fmt.Println("Total poison duration:", result) // Total poison duration: 7
}
