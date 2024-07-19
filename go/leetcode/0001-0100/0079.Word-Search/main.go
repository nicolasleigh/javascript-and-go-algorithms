package main

import (
	"fmt"
)

func exist(board [][]byte, word string) bool {
	// Iterate through each cell in the board
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if backtrack(board, word, i, j, 0) {
				return true
			}
		}
	}
	return false
}

// Function to perform backtracking
func backtrack(board [][]byte, word string, i, j, k int) bool {
	if k == len(word) {
		return true
	}
	if i < 0 || i >= len(board) || j < 0 || j >= len(board[0]) || board[i][j] != word[k] {
		return false
	}

	// Temporarily mark the current cell as visited
	temp := board[i][j]
	board[i][j] = byte(' ')

	// Explore neighbors in 4 directions
	found := backtrack(board, word, i+1, j, k+1) || backtrack(board, word, i-1, j, k+1) || backtrack(board, word, i, j+1, k+1) || backtrack(board, word, i, j-1, k+1)

	// Restore the cell
	board[i][j] = temp

	return found
}

func main() {
	board := [][]byte{
		{'A', 'B', 'C', 'E'},
		{'S', 'F', 'C', 'S'},
		{'A', 'D', 'E', 'E'},
	}
	word := "ABCCED"
	result := exist(board, word)
	fmt.Printf("Does the word '%s' exist on the board? %v\n", word, result)
}
