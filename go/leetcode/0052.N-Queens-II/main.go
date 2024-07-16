package main

import (
	"fmt"
)

func totalNQueens(n int) int {
	var res [][]string
	// Create a 2D slice and fill with initial value '.'
	board := make([][]byte, n)
	for i := range board {
		board[i] = make([]byte, n)
		for j := range board[i] {
			board[i][j] = '.'
		}
	}

	backtrack(board, &res, n, 0)
	return len(res) // The difference between the problem 0051 and the problem 0052
}

// Backtracking function to place queens row by row
func backtrack(board [][]byte, res *[][]string, n, row int) {
	if row == n {
		var solution []string
		for _, row := range board {
			solution = append(solution, string(row))
		}
		*res = append(*res, solution)
		return
	}

	for col := 0; col < n; col++ {
		if isValid(board, n, row, col) {
			board[row][col] = 'Q'
			backtrack(board, res, n, row+1)
			board[row][col] = '.'
		}
	}
}

// Helper function to check if placing a queen at (row, col) is valid
func isValid(board [][]byte, n, row, col int) bool {
	// Check column
	for i := 0; i < row; i++ {
		if board[i][col] == 'Q' {
			return false
		}
	}
	// Check upper left diagonal
	for i, j := row-1, col-1; i >= 0 && j >= 0; i, j = i-1, j-1 {
		if board[i][j] == 'Q' {
			return false
		}
	}
	// Check upper right diagonal
	for i, j := row-1, col+1; i >= 0 && j < n; i, j = i-1, j+1 {
		if board[i][j] == 'Q' {
			return false
		}
	}
	return true
}

func main() {
	n := 4
	result := totalNQueens(n)
	fmt.Println(result)
}
