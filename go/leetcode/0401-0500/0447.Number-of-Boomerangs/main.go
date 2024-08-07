package main

import (
	"fmt"
)
/*
At the first glance I didn't understand why we need res += val * (val-1); this line in the solution. But if you made some examples then it will be pretty clear.
Suppose we have three points A1, A2, A3 all have the same distence to point B
Then our output should be
[B, A1, A2]
[B, A1, A3]
[B, A2, A1]
[B, A2, A3]
[B, A3, A1]
[B, A3, A2]
Do you find out the math in here? we need to permutate 3 points into 2 positions, and that is 3*(3-1) = 6.

For every i, we capture the number of points equidistant from i. Now for this i, we have to calculate all possible permutations of (j,k) from these equidistant points.
Total number of permutations of size 2 from n different points is nP2 = n!/(n-2)! = n * (n-1). hope this helps.
*/

// Function to calculate the number of boomerangs
func numberOfBoomerangs(points [][]int) int {
	res := 0

	for i := 0; i < len(points); i++ {
		// Map to store the count of distances
		distanceCount := make(map[int]int)

		for j := 0; j < len(points); j++ {
			if i == j {
				continue
			}
			d := getDistance(points[i], points[j])
			distanceCount[d]++
		}

		for _, count := range distanceCount {
			res += count * (count - 1) // Permutation nP2
		}
	}

	return res
}

// Function to calculate the squared distance between two points
func getDistance(a, b []int) int {
	dx := a[0] - b[0]
	dy := a[1] - b[1]
	return dx*dx + dy*dy
}

// Main function for demonstration
func main() {
	points := [][]int{
		{0, 0},
		{1, 0},
		{2, 0},
	}

	fmt.Println("Number of boomerangs:", numberOfBoomerangs(points))
}
