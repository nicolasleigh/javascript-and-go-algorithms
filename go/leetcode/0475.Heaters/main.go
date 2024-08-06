package main

import (
	"fmt"
	"math"
	"slices"
	"sort"
)

/*
Example:    h = house,  * = heater  M = INT_MAX

	h   h   h   h   h   h   h   h   h    houses
	1   2   3   4   5   6   7   8   9    index
	*           *       *                heaters

	0   2   1   0   1   0   -   -   -    (distance to nearest RHS heater)
	0   1   2   0   1   0   1   2   3    (distance to nearest LHS heater)

	0   1   1   0   1   0   1   2   3    (res = minimum of above two)

Result is maximum value in res, which is 3.
*/

func findRadius(houses []int, heaters []int) int {
	// Sort the arrays
	sort.Ints(houses)
	sort.Ints(heaters)

	// Create a slice to store the minimum distance to the nearest heater
	res := make([]int, len(houses))
	for i := range res {
		res[i] = math.MaxInt32
	}

	// Calculate distance to the nearest right heater
	i, j := 0, 0
	for i < len(houses) && j < len(heaters) {
		if houses[i] <= heaters[j] {
			res[i] = heaters[j] - houses[i]
			i++
		} else {
			j++
		}
	}

	// Calculate distance to the nearest left heater
	i, j = len(houses)-1, len(heaters)-1
	for i >= 0 && j >= 0 {
		if houses[i] >= heaters[j] {
			res[i] = min(res[i], houses[i]-heaters[j])
			i--
		} else {
			j--
		}
	}

	// Find the maximum value in res
	maxRadius := slices.Max(res)

	return maxRadius
}

func main() {
	houses := []int{1, 2, 3}
	heaters := []int{2}
	fmt.Println(findRadius(houses, heaters)) // Output: 1
}
