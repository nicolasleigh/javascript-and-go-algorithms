package main

import "fmt"

func longestIncreasingPath(matrix [][]int) int {
	m, n := len(matrix), len(matrix[0])

	// Initialize memoization table
	memo := make([][]int, m)
	for i := range memo {
		memo[i] = make([]int, n)
	}

	maxPathLen := 0

	// Perform DFS from each cell
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			maxPathLen = max(maxPathLen, dfs(matrix, i, j, memo))
		}
	}

	return maxPathLen
}

func dfs(matrix [][]int, i, j int, memo [][]int) int {
	// Check boundaries
	if i < 0 || j < 0 || i >= len(matrix) || j >= len(matrix[0]) {
		return 0
	}

	// Return the stored result if already computed
	if memo[i][j] != 0 {
		return memo[i][j]
	}

	// Initialize the current cell's longest path length to 1
	currentMax := 1

	// Define row and column direction arrays (Up, Left, Right, Down)
	rowP := []int{-1, 0, 0, 1}
	colP := []int{0, -1, 1, 0}

	// Explore all four directions
	for k := 0; k < 4; k++ {
		newI, newJ := i+rowP[k], j+colP[k]
		if newI >= 0 && newJ >= 0 && newI < len(matrix) && newJ < len(matrix[0]) && matrix[newI][newJ] > matrix[i][j] {
			currentMax = max(currentMax, 1+dfs(matrix, newI, newJ, memo))
		}
	}

	// Store the result in memoization table and return it
	memo[i][j] = currentMax
	return currentMax
}

func main() {
	matrix1 := [][]int{
		{9, 9, 4},
		{6, 6, 8},
		{2, 1, 1},
	}
	matrix2 := [][]int{
		{7, 7, 5},
		{2, 4, 6},
		{8, 2, 0},
	}
	fmt.Println(longestIncreasingPath(matrix1)) // Output: 4
	fmt.Println(longestIncreasingPath(matrix2)) // Output: 4
}
