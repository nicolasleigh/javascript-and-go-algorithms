package main

import "fmt"

func islandPerimeter(grid [][]int) int {
	// Directions: up, down, left, right
	directions := [][2]int{
		{-1, 0},
		{1, 0},
		{0, -1},
		{0, 1},
	}
	rowLen, colLen, perimeter := len(grid), len(grid[0]), 0

	for i := 0; i < rowLen; i++ {
		for j := 0; j < colLen; j++ {
			if grid[i][j] != 1 {
				continue
			}
			// Check each of the 4 neighbors
			for _, dir := range directions {
				row := i + dir[0]
				col := j + dir[1]
				// If the neighbor is out of bounds or water, increment perimeter
				if row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] == 0 {
					perimeter++
				}
			}
		}
	}

	return perimeter
}

func main() {
	grid := [][]int{
		{0, 1, 0, 0},
		{1, 1, 1, 0},
		{0, 1, 0, 0},
		{0, 0, 0, 0},
	}

	result := islandPerimeter(grid)
	fmt.Println(result) // Output: 12
}
