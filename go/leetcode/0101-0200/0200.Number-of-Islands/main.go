package main

import "fmt"

func numIslands(grid [][]byte) int {
	if len(grid) == 0 {
		return 0
	}

	res := 0
	rows, cols := len(grid), len(grid[0])

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == '1' {
				res++
				dfs(i, j, grid, rows, cols)
			}
		}
	}

	return res
}

func dfs(i, j int, grid [][]byte, rows, cols int) {
	if i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == '0' {
		return
	}

	grid[i][j] = '0'

	dfs(i-1, j, grid, rows, cols) // Up
	dfs(i+1, j, grid, rows, cols) // Down
	dfs(i, j-1, grid, rows, cols) // Left
	dfs(i, j+1, grid, rows, cols) // Right
}

func main() {
	grid := [][]byte{
		{'1', '1', '0', '0', '0'},
		{'1', '1', '0', '0', '0'},
		{'0', '0', '1', '0', '0'},
		{'0', '0', '0', '1', '1'},
	}

	fmt.Println(numIslands(grid)) // Output: 3
}
