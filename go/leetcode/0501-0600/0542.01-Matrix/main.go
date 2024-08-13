package main

import (
	"fmt"
	"math"
)

// updateMatrix updates the matrix to contain the distance to the nearest 0 for each cell.
func updateMatrix(matrix [][]int) [][]int {
	m, n := len(matrix), len(matrix[0])

	// Initialize a queue
	queue := [][]int{}
	// Directions for moving in the matrix
	dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	// Set initial distances and populate the queue
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if matrix[i][j] == 0 {
				queue = append(queue, []int{i, j})
			} else {
				matrix[i][j] = math.MaxInt32
			}
		}
	}

	// BFS to update distances
	for len(queue) > 0 {
		cell := queue[0]
		queue = queue[1:]
		r, c := cell[0], cell[1]
		for _, d := range dirs {
			nr, nc := r+d[0], c+d[1]
			if nr >= 0 && nr < m && nc >= 0 && nc < n && matrix[nr][nc] > matrix[r][c]+1 {
				matrix[nr][nc] = matrix[r][c] + 1
				queue = append(queue, []int{nr, nc})
			}
		}
	}

	return matrix
}

func main() {
	matrix := [][]int{
		{0, 0, 0},
		{0, 1, 0},
		{1, 1, 1},
	}
	result := updateMatrix(matrix)
	for _, row := range result {
		fmt.Println(row)
	}
}
