package main

import (
	"fmt"
	"math"
)

func calculateMinimumHP(dungeon [][]int) int {
	m := len(dungeon)
	n := len(dungeon[0])

	// Initialize a 2D slice with a dummy row and column, hp[i][j] represents the minimum hp needed at this position
	hp := make([][]int, m+1)
	for i := range hp {
		hp[i] = make([]int, n+1)
		for j := range hp[i] {
			hp[i][j] = math.MaxInt32
		}
	}
	hp[m][n-1] = 1 // Under princess -- dummy row
	hp[m-1][n] = 1 // On princess's right -- dummy column

	// Calculate the minimum HP needed for each cell
	for i := m - 1; i >= 0; i-- {
		for j := n - 1; j >= 0; j-- {
			need := min(hp[i+1][j], hp[i][j+1]) - dungeon[i][j]
			if need <= 0 {
				hp[i][j] = 1
			} else {
				hp[i][j] = need
			}
		}
	}
	return hp[0][0]
}

func main() {
	dungeon := [][]int{
		{-2, -3, 3},
		{-5, -10, 1},
		{10, 30, -5},
	}
	fmt.Println(calculateMinimumHP(dungeon)) // Output: 7
}
