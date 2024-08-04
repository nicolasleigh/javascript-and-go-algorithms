package main

import "fmt"

// pacificAtlantic returns the cells that can reach both Pacific and Atlantic oceans.
// From border cell, traverse the whole graph to find the neighbors that have the same or higher value.
// For pacific, start from the top and left border cell. If the value in the pacific array is true, means the water can flow from this cell to the pacific.
// For atlantic, start from the bottom and right border cell.
// In order to find the cell that water can flow to both pacific and atlantic, we need to find the cell that the value is true in both pacific and atlantic arrays.
func pacificAtlantic(heights [][]int) [][]int {
	rows, cols := len(heights), len(heights[0])

	// Create two 2D arrays to keep track of the cells that can reach the pacific and the atlantic
	pacific := make([][]bool, rows)
	atlantic := make([][]bool, rows)
	for i := 0; i < rows; i++ {
		pacific[i] = make([]bool, cols)
		atlantic[i] = make([]bool, cols)
	}

	// Perform DFS from the Pacific and Atlantic borders
	// Check the first column for pacific and the last column for atlantic
	for i := 0; i < rows; i++ {
		dfs(heights, i, 0, &pacific, heights[i][0])
		dfs(heights, i, cols-1, &atlantic, heights[i][cols-1])
	}
	// Check the first row for pacific and the last row for atlantic
	for j := 0; j < cols; j++ {
		dfs(heights, 0, j, &pacific, heights[0][j])
		dfs(heights, rows-1, j, &atlantic, heights[rows-1][j])
	}

	// Collect the results
	// If the cell is visited by both pacific and atlantic, then add it to the result
	result := [][]int{}
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if pacific[i][j] && atlantic[i][j] {
				result = append(result, []int{i, j})
			}
		}
	}

	return result
}

// dfs performs depth-first search to mark cells that can flow to the ocean.
// Check the current cell and its neighbors.
// If the current cell value (prev) is less than or equal to its neighbor's value,
// then mark the neighbor as visited (water can flow from the neighbor cell to the current cell)
func dfs(heights [][]int, i, j int, visited *[][]bool, prevHeight int) {
	if i < 0 || i >= len(heights) || j < 0 || j >= len(heights[0]) || (*visited)[i][j] || heights[i][j] < prevHeight {
		return
	}

	// If the height is greater than or equal to the previous height, mark the cell as visited.
	(*visited)[i][j] = true

	// Recursively check the current cell's neighbors
	dfs(heights, i-1, j, visited, heights[i][j])
	dfs(heights, i+1, j, visited, heights[i][j])
	dfs(heights, i, j-1, visited, heights[i][j])
	dfs(heights, i, j+1, visited, heights[i][j])
}

func main() {
	heights := [][]int{
		{1, 2, 2, 3, 5},
		{3, 2, 3, 4, 4},
		{2, 4, 5, 3, 1},
		{6, 7, 1, 4, 5},
		{5, 1, 1, 2, 4},
	}
	result := pacificAtlantic(heights)
	fmt.Println(result) // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
}
